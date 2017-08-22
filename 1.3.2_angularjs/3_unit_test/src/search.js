/**
 * @file search
 * @author bian17888 2017/8/21 16:27
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Search', Search);

    Search.$inject = ['$location'];

    /* @ngInject */
    function Search($location) {
        var vm = this;
        vm.title = 'Search';
        vm.search = search;

        activate();

        ////////////////

        function activate() {
            //
        }

        function search() {
            if (vm.query) {
                $location.path('/result').search('q', vm.query);
            }
        }
    }

})();

