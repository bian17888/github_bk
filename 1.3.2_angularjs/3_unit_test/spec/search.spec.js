/**
 * @file search.spec
 * @author bian17888 2017/8/21 16:17
 */

describe('Search Controller', function () {

    var $location = null;
    var $controller = null;
    var $timeout = null;
    var $this = null;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$controller_, _$location_, _$timeout_) {
        $controller = _$controller_;
        $location = _$location_;
        $timeout = _$timeout_;
        $this = $controller('Search', {$location: $location, $timeout: $timeout});
    }));

    it('should redirect to the search', function () {
        $this.query = 'bian17888';
        $this.search();
        expect($location.url()).toBe('/result?q=bian17888')
    });

    it('should not redirect to the search', function () {
        $this.query = '';
        $this.search();
        expect($location.url()).toBe('')
    });

    it('should redirect after 1 second if keyboard inactivity', function () {
        $this.query = 'bian17888';
        $this.keyup();
        $timeout.flush();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
        expect($location.url()).toBe('/result?q=bian17888')
    });

    it('should cancle timeout in keydown', function () {
        $this.query = 'bian17888';
        $this.keyup();
        $this.keydown();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });

    it('should cancle timeout on search', function () {
        $this.query = 'bian17888';
        $this.keyup();
        $this.search();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });

});