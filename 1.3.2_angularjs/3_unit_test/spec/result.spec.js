/**
 * @file result.spec
 * @author bian17888 2017/8/21 20:02
 */

describe('Result Controller', function () {

    var $httpBackend;
    var $rootScope;
    var $location;
    var $q;
    var $controller;
    var dataservice;
    var $this;

    var reposData = readJSON('mock/repos.json');

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$httpBackend_, _$rootScope_, _$location_, _$q_, _$controller_, _dataservice_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        $q = _$q_;
        $controller = _$controller_;
        dataservice = _dataservice_;
    }));

    it('should load search result ', function () {
        var expectedUrl = /^https:\/\/api.github.com\/users\/\w+\/repos$/;

        $httpBackend.expect('GET', expectedUrl)
            .respond(200, reposData);
        $location.search('q', 'bian17888');
        $this = $controller('Result', {});
        $httpBackend.flush();
        expect($this.results).toBeDefined();
    });

    it('should load search result to error ', function () {
        var expectedUrl = /^https:\/\/api.github.com\/users\/\w+\/repos$/;

        $httpBackend.expect('GET', expectedUrl)
            .respond(500, 'Error!');
        $location.search('q', 'bian17888');
        $this = $controller('Result', {});
        $httpBackend.flush();
        expect($this.results.error).toBe('Error!');
    });
});