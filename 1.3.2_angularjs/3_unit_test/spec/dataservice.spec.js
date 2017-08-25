/**
 * @file service
 * @author bian17888 2017/8/7 16:02
 */
describe('dataservice', function () {

    var $httpBackend;
    var dataservice = {};
    var reposData = readJSON('mock/repos.json');

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$httpBackend_, _dataservice_) {
        dataservice = _dataservice_;
        $httpBackend = _$httpBackend_;
    }));
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return search user repos', function () {
        var response;
        var expectedUrl = /^https:\/\/api.github.com\/users\/\w+\/repos$/;

        $httpBackend.expect('GET', expectedUrl)
            .respond(200, reposData);

        dataservice.UserRepos().query({username: 'bian17888'}, function (data) {
            response = data;
        });

        $httpBackend.flush();
        expect(response[0].id).toEqual(79793567);
    });

    it('should handle error', function () {
        var response;
        var expectedUrl = /^https:\/\/api.github.com\/users\/\w+\/repos$/;

        $httpBackend.expect('GET', expectedUrl)
            .respond(500);

        dataservice.UserRepos().query({username: 'bian17888'}, function (data) {
            response = data;
        }, function (err) {
            response = 'Error!';
        });

        $httpBackend.flush();
        expect(response).toEqual('Error!');
    });

    //it('should PUT user repos', function () {
    //    var expectedData = {
    //        username: 'bian17888',
    //        description : 'bian17888 description!'
    //    };
    //
    //    $httpBackend.expect('PUT', 'users')
    //        .respond(200, expectedData);
    //    dataservice.userRepos().update({
    //        username: 'bian17888',
    //        description : 'bian17888 description!'
    //    });
    //
    //    expect($httpBackend.flush).not.toThrow();
    //});
    //
});

