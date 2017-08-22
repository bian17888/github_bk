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
        vm.data = null;

        activate();

        ////////////////

        function activate() {
            dataservice.find(query).then(function (data) {
                vm.data = data;
            }, function(){
                vm.data = 'error';
            })
        }

    }

})();

