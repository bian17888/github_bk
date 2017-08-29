/**
 * @file filter.spec
 * @author bian17888 2017/8/28 17:23
 */

describe('App filters', function () {

    var $filter;
    var f_upperCase;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function (_$filter_) {
        $filter = _$filter_;
        f_upperCase = $filter('upperCase');
    }));

    it('should return upper string', function () {
        dump(angular.mock.dump(f_upperCase('Beck')));
    });

});