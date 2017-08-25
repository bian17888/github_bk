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
        var baseUrl = 'https://api.github.com/';
        var reposUrl = baseUrl + 'users/:username/repos';
        var service = {
            UserRepos: UserRepos,
            find: find
        };
        return service;

        ////////////////

        function UserRepos() {
            var _Repos = $resource(reposUrl, {username: '@name'}, {
                update: {
                    method: 'PUT'
                }
            });
            return _Repos;
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

