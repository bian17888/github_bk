/**
 * @file search
 * @author bian17888 2017/8/21 16:27
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Result', Result);

    Result.$inject = ['$location', 'dataservice'];

    /* @ngInject */
    function Result($location, dataservice) {
        var vm = this;
        var query = $location.search().q;

        vm.results = [];
        vm.title = '123';

        activate();

        ////////////////

        function activate() {
            dataservice.UserRepos().query({username: query}, function (data) {
                vm.results = data;
            }, function (err) {
                vm.results.error = 'Error!'
            })
        }

    }

})();

