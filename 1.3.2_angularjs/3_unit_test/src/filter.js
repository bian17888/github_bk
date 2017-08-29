/**
 * @file filter
 * @author bian17888 2017/8/28 17:20
 */
(function () {
    'use strict';

    angular
        .module('app')
        .filter('upperCase', upperCase);

    function upperCase() {
        return upperCaseFilter;

        // ////////////////////////////////////////////////

        function upperCaseFilter(parameters) {
            var _parameters = parameters || '';
            return _parameters.toUpperCase();
        }
    }

})();

