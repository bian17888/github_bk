/**
 * @file search.spec
 * @author bian17888 2017/8/21 16:17
 */

describe('Search Controller', function () {

    var $location = null;
    var $controller = null;
    var $this = null;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function(_$controller_, _$location_){
        $controller = _$controller_;
        $location = _$location_;
    }));

    it('should redirect to the search', function(){
        $this = $controller('Search', {$location : $location}, {query : 'star+wars'});
        $this.search();
        expect($location.url()).toBe('/results?q=star%2Bwars')
    });

    it('should not redirect to the search', function(){
        $this = $controller('Search', {$location : $location}, {query : ''});
        $this.search();
        expect($location.url()).toBe('')
    })

});