/**
 * @file utReposResult
 * @author bian17888 2017/8/25 19:12
 */
describe('Repos Result Directive', function () {
    var $rootScope;
    var $compile;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('widgets/utReposResult.html'));
    beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should render ut-repos-result directive', function () {
        var element = angular.element('<ut-repos-result></ut-repos-result>');

        $compile(element)($rootScope);
        $rootScope.$digest();

        //dump(angular.mock.dump(element));
        expect(element).toBeDefined();
        expect($rootScope.$countChildScopes()).toBe(1);
        expect($rootScope.$countWatchers()).toBe(4);

    });
});