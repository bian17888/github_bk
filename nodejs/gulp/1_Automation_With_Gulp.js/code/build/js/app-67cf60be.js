(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',
        'app.widgets',

        /* Feature areas */
        'app.customers',
        'app.dashboard',
        'app.layout'
    ]);

})();

(function() {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngAnimate',
            'ngSanitize',
            /* Cross-app modules */
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            /* 3rd-party modules */
            'ui.router',
            'ngplus'
        ]);

})();

(function() {
    'use strict';

    angular.module('app.customers', [
        'app.core',
        'app.widgets'
    ]);

})();

(function() {
    'use strict';

    angular.module('app.dashboard', [
        'app.core',
        'app.widgets'
    ]);

})();

(function() {
    'use strict';

    angular.module('app.layout', ['app.core']);
})();

(function() {
    'use strict';

    angular.module('app.widgets', []);
})();

(function() {
    'use strict';

    angular.module('blocks.exception', ['blocks.logger']);
})();

(function() {
    'use strict';

    angular.module('blocks.logger', []);
})();

(function() {
    'use strict';

    angular.module('blocks.router', [
        'ui.router',
        'blocks.logger'
    ]);
})();

(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[GulpPatterns Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Gulp Patterns Demo',
        imageBasePath: '/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider',
                         'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure ($compileProvider, $logProvider,
                         routerHelperProvider, exceptionHandlerProvider) {
        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        configureStateHelper();

        ////////////////

        function configureStateHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['dataservice'];
            /* @ngInject */
            function ready(dataservice) {
                return dataservice.ready();
            }

            routerHelperProvider.configure({
                docTitle: 'Gulp: ',
                resolveAlways: resolveAlways
            });
        }
    }
})();

/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var readyPromise;

        var service = {
            getCustomer: getCustomer,
            getCustomers: getCustomers,
            ready: ready
        };

        return service;

        function getCustomer(id) {
            return $http.get('/api/customer/' + id)
                .then(getCustomerComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomer')(message);
                    $location.url('/');
                });

            function getCustomerComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getCustomers() {
            return $http.get('/api/customers')
                .then(getCustomersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomers')(message);
                    $location.url('/');
                });

            function getCustomersComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getReady() {
            if (!readyPromise) {
                // Apps often pre-fetch session data ("prime the app")
                // before showing the first view.
                // This app doesn't need priming but we add a
                // no-op implementation to show how it would work.
                logger.info('Primed the app data');
                readyPromise = $q.when(service);
            }
            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function() {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetail', CustomerDetail);

    CustomerDetail.$inject = ['$stateParams', '$window', 'dataservice', 'logger'];
    /* @ngInject */
    function CustomerDetail($stateParams, $window, dataservice, logger) {
        var vm = this;
        vm.cancel = cancel;
        vm.customer = undefined;
        vm.goBack = goBack;
        vm.isUnchanged = isUnchanged;
        vm.getFullName = getFullName;
        vm.save = save;
        vm.title = 'Customer Detail';

        activate();

        function activate() {
            return getCustomer($stateParams.id).then(function() {
                logger.info('Activated Customer Detail View');
            });
        }

        function cancel() {
            vm.customer = angular.copy(vm.original);
        }

        function getCustomer(id) {
            return dataservice.getCustomer(id).then(function(data) {
                vm.customer = data;
                vm.original = angular.copy(vm.customer);
                return vm.customer;
            });
        }

        function goBack() {
            $window.history.back();
        }

        function isUnchanged() {
            return angular.equals(vm.customer, vm.original);
        }

        function getFullName() {
            return vm.customer && vm.customer.firstName + ' ' + vm.customer.lastName;
        }

        function save() {
            vm.original = angular.copy(vm.customer);
            logger.success('Saving Customer (not really)');
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('Customers', Customers);

    Customers.$inject = ['$state', 'dataservice', 'logger'];
    /* @ngInject */
    function Customers($state, dataservice, logger) {
        var vm = this;
        vm.customers = [];
        vm.gotoCustomer = gotoCustomer;
        vm.title = 'Customers';

        activate();

        function activate() {
            return getCustomers().then(function() {
                logger.info('Activated Customers View');
            });
        }

        function getCustomers() {
            return dataservice.getCustomers().then(function(data) {
                vm.customers = data;
                return vm.customers;
            });
        }

        function gotoCustomer(c) {
            $state.go('customer.detail', {id: c.id});
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.customers')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'customer',
                config: {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/customer'
                }
            },
            {
                state: 'customer.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/customers/customers.html',
                    controller: 'Customers',
                    controllerAs: 'vm',
                    title: 'Customers',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-group"></i> Customers'
                    }
                }
            },
            {
                state: 'customer.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/customers/customer-detail.html',
                    controller: 'CustomerDetail',
                    controllerAs: 'vm',
                    title: 'Customer Detail'
                }
            }
        ];
    }
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$state', 'dataservice', 'logger'];
    function Dashboard($state, dataservice, logger) {
        var vm = this;
        vm.customers = [];
        vm.gotoCustomer = gotoCustomer;
        vm.title = 'Dashboard';

        activate();

        function activate() {
            return getCustomers().then(function() {
                logger.info('Activated Dashboard');
            });
        }

        function getCustomers() {
            return dataservice.getCustomers().then(function(data) {
                vm.customers = data;
                return vm.customers;
            });
        }

        function gotoCustomer(c) {
            $state.go('customer.detail', {id: c.id});
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();

(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htSidebar', htSidebar);

    /* @ngInject */
    function htSidebar () {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div ht-sidebar">
        //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div ht-sidebar class="sidebar">
        var directive = {
            bindToController: true,
            link: link,
            restrict: 'EA',
            scope: {
                whenDoneAnimating: '&?'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                }
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'tagline': '=',
                'title': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController() {
            var vm = this;
        }

        return directive;
    }
})();

(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config', 'logger'];
    /* @ngInject */
    function Shell($timeout, config, logger) {
        var vm = this;

        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;
        vm.tagline = {
            text: 'Created by John Papa',
            link: 'http://twitter.com/john_papa'
        };

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Sidebar', Sidebar);

    Sidebar.$inject = ['$state', 'routerHelper'];
    /* @ngInject */
    function Sidebar($state, routerHelper) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;
        //vm.sidebarReady = function(){console.log('done animating menu')}; // example

        activate();

        function activate() { getNavRoutes(); }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htImgPerson', htImgPerson);

    htImgPerson.$inject = ['config'];
    /* @ngInject */
    function htImgPerson (config) {
        //Usage:
        //<img ht-img-person="{{person.imageSource}}"/>
        var basePath = config.imageBasePath;
        var unknownImage = config.unknownPersonImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('htImgPerson', function (value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htWidgetHeader', htWidgetHeader);

    /* @ngInject */
    function htWidgetHeader () {
        //Usage:
        //<div ht-widget-header title="vm.map.title"></div>
        // Creates:
        // <div ht-widget-header=""
        //      title="Movie"
        //      allow-collapse="true" </div>
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            },
            templateUrl: 'app/widgets/widget-header.html',
            restrict: 'EA'
        };
        return directive;
    }
})();

// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .provider('exceptionHandler', exceptionHandlerProvider)
        .config(config);

    /**
     * Must configure the exception handling
     * @return {[type]}
     */
    function exceptionHandlerProvider() {
        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = function() {
            return {config: this.config};
        };
    }

    config.$inject = ['$provide'];
    /**
     * Configure by setting an optional string value for appErrorPrefix.
     * Accessible via config.appErrorPrefix (via config value).
     * @param  {[type]} $provide
     * @return {[type]}
     * @ngInject
     */
    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    /**
     * Extend the $exceptionHandler service to also display a toast.
     * @param  {Object} $delegate
     * @param  {Object} exceptionHandler
     * @param  {Object} logger
     * @return {Function} the decorated $exceptionHandler service
     */
    extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
    /* @ngInject */
    function extendExceptionHandler($delegate, exceptionHandler, logger) {
        return function(exception, cause) {
            var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
            var errorData = {exception: exception, cause: cause};
            exception.message = appErrorPrefix + exception.message;
            $delegate(exception, cause);
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             */
            logger.error(exception.message, errorData);
        };
    }
})();

(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    exception.$inject = ['logger'];
    /* @ngInject */
    function exception(logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(reason) {
                logger.error(message, reason);
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];
    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,

            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());

/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        $locationProvider.html5Mode(true);

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$location', '$rootScope', '$state', 'logger'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state, logger) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var msg = formatErrorMessage(error);
                        logger.warning(msg, [toState]);
                        $location.path('/');

                        function formatErrorMessage(error) {
                            var dest = (toState && (toState.title || toState.name ||
                                                    toState.loadedTemplateUrl)) || 'unknown target';
                            return 'Error routing to ' + dest + '. ' +
                                error.message || error.data || '' +
                                '. <br/>' + (error.statusText || '') +
                                ': ' + (error.status || '');
                        }
                    }
                );
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>
                    }
                );
            }
        }
    }
})();

angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/customers/customer-detail.html","<section class=mainbar><section class=matter><div class=container><div><button class=\"btn btn-info btn-form-md\" ng-click=vm.goBack()><i class=\"fa fa-hand-o-left\"></i>Back</button> <button class=\"btn btn-info btn-form-md\" ng-click=vm.cancel() ng-disabled=vm.isUnchanged()><i class=\"fa fa-undo\"></i>Cancel</button> <button class=\"btn btn-info btn-form-md\" ng-click=vm.save() ng-disabled=\"form.$invalid || vm.isUnchanged()\"><i class=\"fa fa-save\"></i>Save</button><span ng-hide=vm.isUnchanged() class=\"dissolve-animation ng-hide flag-haschanges\"><i class=\"fa fa-asterisk fa fa-asterisk-large\" rel=tooltip title=\"You have changes\"></i></span></div><div class=\"widget wblue\"><div ht-widget-header title=\"Edit {{vm.getFullName() || \'New Customer\'}}\"></div><div class=\"widget-content user\"><div class=form-group><label class=control-label>ID:</label> <label class=control-label>{{vm.customer.id}}</label></div><div class=form-group><label class=control-label>First Name</label><div><input class=form-control ng-model=vm.customer.firstName placeholder=\"First Name\"></div></div><div class=form-group><label class=control-label>Last Name</label><div><input class=form-control ng-model=vm.customer.lastName placeholder=\"Last Name\"></div></div><div class=form-group><label class=control-label>City</label><div><input class=form-control ng-model=vm.customer.city placeholder=City></div></div><div class=form-group><label class=control-label>State</label><div><input class=form-control ng-model=vm.customer.state placeholder=State></div></div><div class=form-group><label class=control-label>Postal Code</label><div><input class=form-control ng-model=vm.customer.zip placeholder=\"Postal Code\"></div></div><div class=form-group><img ht-img-person={{vm.customer.thumbnail}} class=img-thumbnail></div></div></div></div></section></section>");
$templateCache.put("app/customers/customers.html","<section class=mainbar><section class=matter><div class=container><div class=row><div class=\"widget wblue\"><div ht-widget-header title={{vm.title}}></div><div class=\"widget-content user\"><input ng-model=vm.filter placeholder=\"Find customers\" type=search><table class=\"table table-condensed table-hover\"><thead><tr><th>Customer</th><th>City</th><th>State</th></tr></thead><tbody><tr ng-repeat=\"c in vm.customers | filter:vm.filter track by c.id\" ng-click=vm.gotoCustomer(c)><td>{{c.firstName + \' \' + c.lastName}}</td><td>{{c.city}}</td><td>{{c.state}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/dashboard/dashboard.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=borange><div class=pull-left><i class=\"fa fa-coffee\"></i></div><div class=\"datas-text pull-right\"><a href=http://www.gulpjs.com><span class=bold>Gulp</span></a></div><div class=clearfix></div></li><li class=bviolet><div class=pull-left><i class=\"fa fa-users\"></i></div><div class=\"datas-text pull-right\"><span class=bold>{{vm.customers.length}}</span> Customers</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=\"widget wblue\"><div ht-widget-header title=\"Recent Customers\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><div class=container><ul class=\"row image-group\"><li ng-repeat=\"c in vm.customers | limitTo:12 | orderBy:\'name\'\" ng-click=vm.gotoCustomer(c) class=\"col-lg-2 col-md-2 col-sm-3 col-xs-4\"><div class=user title=\"Go to speaker details\"><img ht-img-person={{c.thumbnail}} class=\"img-thumbnail stacked\"><div><small>{{c.firstName}}</small></div><div><small>{{c.lastName}}</small></div></div></li></ul></div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/layout/ht-top-nav.html","<nav class=\"navbar navbar-fixed-top navbar-inverse\"><div class=navbar-header><a href=\"/\" class=navbar-brand><span class=brand-title>{{vm.title}}</span></a> <a class=\"btn navbar-btn navbar-toggle\" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class=\"navbar-collapse collapse\"><div class=\"pull-right navbar-logo\"><ul class=\"nav navbar-nav pull-right\"><li><a ng-href={{vm.tagline.link}} target=_blank>{{vm.tagline.text}}</a></li><li class=\"dropdown dropdown-big\"><a href=http://www.angularjs.org target=_blank><img src=images/AngularJS-small.png></a></li><li><a href=\"http://www.gulpjs.com/\" target=_blank><img src=images/gulp-tiny.png></a></li></ul></div></div></nav>");
$templateCache.put("app/layout/shell.html","<div ng-controller=\"Shell as vm\"><header class=clearfix><ht-top-nav title=vm.title tagline=vm.tagline></ht-top-nav></header><section id=content class=content><div ng-include=\"\'app/layout/sidebar.html\'\"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=../../content/images/busy.gif><div class=\"page-spinner-message overlay-message\">{{vm.busyMessage}}</div></div></section></div>");
$templateCache.put("app/layout/sidebar.html","<div ng-controller=\"Sidebar as vm\"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class=\"nlightblue fade-selection-animation\" ng-class=vm.isCurrent(r) ng-repeat=\"r in vm.navRoutes\"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>");
$templateCache.put("app/widgets/widget-header.html","<div class=widget-head><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\" ng-if=allowCollapse><a ht-widget-minimize></a></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);