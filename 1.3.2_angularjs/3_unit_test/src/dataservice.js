/**
 * @file calculator
 * @author bian17888 2017/8/7 14:46
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', '$resource'];

    /* @ngInject */
    function dataservice($http, $q, $resource) {
        var baseUrl = 'https://api.github.com/repos/bian17888/';
        var service = {
            popularMovie: popularMovie,
            find: find
        };
        return service;

        ////////////////

        function popularMovie() {
            var _Movie = $resource('popular/:movieId', {movieId: '@id'}, {
                update: {
                    method: 'PUT'
                }
            });
            return _Movie;
        }

        function find(repository) {
            return _commonGet(baseUrl + repository);
        }

        function _commonGet(url) {
            var deferred = $q.defer();
            $http.get(url)
                .then(function (data) {
                    deferred.resolve(data);

                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        }
    }

})();

