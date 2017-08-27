/**
 * @file home
 * @author bian17888 2017/8/25 11:08
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    Home.$inject = ['$interval', 'dataservice'];

    /* @ngInject */
    function Home($interval, dataservice) {
        var vm = this;
        var interval = null;
        vm.title = 'Home';
        vm.results = [];
        vm.repos = {};

        activate();

        ////////////////

        function activate() {
            dataservice.UserRepos().query({username: 'bian17888'}, function (data) {
                vm.results = data;
                autoShowRepos(data);
            }, function (err) {
                vm.results.error = 'Error'
            });
        }

        function autoShowRepos(data) {
            var i = 0;
            var times = data.length;

            // 默认显示项
            angular.copy(data[0], vm.repos);
            interval = $interval(function () {
                ++i;
                i = i % times;
                angular.copy(vm.results[i], vm.repos);
            }, 2000, 0)
        }
    }

})();

