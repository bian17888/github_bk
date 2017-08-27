/**
 * @file utReposResult
 * @author bian17888 2017/8/25 18:56
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('utReposResult', utReposResult);

    utReposResult.$inject = [];

    /* @ngInject */
    function utReposResult() {
        var directive = {
            restrict: 'EA',
            scope: {
                result: '=result'
            },
            templateUrl: 'widgets/utReposResult.html'
        };
        return directive;
    }


})();

