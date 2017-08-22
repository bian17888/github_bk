/**
 * @file result.spec
 * @author bian17888 2017/8/21 20:02
 */

describe('Result Controller', function () {

    var $rootScope;
    var $location;
    var $q;
    var $controller;
    var dataservice;
    var $this;

    var result = {name: 'bian17888'};

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$rootScope_, _$location_, _$q_, _$controller_, _dataservice_) {
        $rootScope = _$rootScope_;
        $location = _$location_;
        $q = _$q_;
        $controller = _$controller_;
        dataservice = _dataservice_;
    }));

    it('should load search result ', function () {
        spyOn(dataservice, 'find').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(result);
            return deferred.promise;
        });
        $location.search('q', 'star+wars');
        $this = $controller('Result', {});
        $rootScope.$apply();
        expect($this.data.name).toBe(result.name)
    });

    it('should set result status to error ', function () {
        spyOn(dataservice, 'find').and.callFake(function () {
            var deferred = $q.defer();
            deferred.reject();
            return deferred.promise;
        });
        $location.search('q', 'star+wars');
        $this = $controller('Result', {});
        $rootScope.$apply();
        expect($this.data).toBe('error')
    });
});