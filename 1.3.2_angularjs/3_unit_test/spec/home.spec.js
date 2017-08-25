/**
 * @file home.spec
 * @author bian17888 2017/8/25 11:08
 */

describe('home controller', function () {

    var $httpBackend;
    var $controller;
    var $interval;
    var dataservice;
    var $this;

    var reposData = readJSON('mock/repos.json');
    var expectedUrl = /^https:\/\/api.github.com\/users\/\w+\/repos$/;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$httpBackend_, _$controller_, _$interval_, _dataservice_) {
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        $interval = _$interval_;
        dataservice = _dataservice_;

        $this = $controller('Home', {$interval: $interval});
    }));

    it('should load the lastest repos and rotate repos every 5 seconds .', function () {

        $httpBackend.expect('GET', expectedUrl)
            .respond(200, reposData);
        $httpBackend.flush();
        expect($this.results).toBeDefined();

        dump(angular.mock.dump($this.repos));
        
        // should have a default starting movie
        expect($this.repos.name).toEqual(reposData[0].name);

        // after 5 seconds, should be next movie
        $interval.flush(2000);
        expect($this.repos.name).toBe(reposData[0].name);
        // after 5 seconds, should be next movie
        $interval.flush(2000);
        expect($this.repos.name).toBe(reposData[1].name);
    });

    it('should load the lastest repos to error .', function () {
        $httpBackend.expect('GET', expectedUrl)
            .respond(500, 'Error');
        $httpBackend.flush();
        expect($this.results.error).toBe('Error');
    });

});