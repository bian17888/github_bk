/**
 * Created by biankai on 14/12/17.
 */
var caseInfoDb = {};
var initNum = 0

exports.listCaseInfo = function () {
    return caseInfoDb[initNum];
};

exports.saveCaseInfo = function (caseinfo) {
    caseInfoDb[initNum] = caseinfo;
};
