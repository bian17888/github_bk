/**
 * @file search
 * @author bian17888 2017/8/21 16:27
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Search', Search);

    Search.$inject = ['$location', '$timeout'];

    /* @ngInject */
    function Search($location, $timeout) {
        var vm = this;
        var timer = null;

        vm.title = 'Search';
        vm.search = search;
        vm.keyup = keyup;
        vm.keydown = keydown;

        activate();

        ////////////////

        function activate() {
            //
        }

        function search() {
            $timeout.cancel(timer);
            if (vm.query) {
                $location.path('/result').search('q', vm.query);
            }
        }

        function keyup() {
            timer = $timeout(search, 1000);
        }

        function keydown() {
            $timeout.cancel(timer);
        }
    }

})();

