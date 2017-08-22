/**
 * @file app
 * @author bian17888 2017/8/22 14:41
 */
(function () {
    'use strict';

    angular
        .module('app', ['ui.bootstrap', 'ngRoute', 'ngResource'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/result', {
                    templateUrl: 'result.html',
                    controller: 'Result'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();