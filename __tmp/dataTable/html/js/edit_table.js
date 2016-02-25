var app = angular.module("myApp", ["ngTable", "ngResource"]);

(function() {
    "use strict";

    app.controller("demoController", demoController);
    demoController.$inject = ["NgTableParams", "$resource", "$http"];

    function demoController(NgTableParams, $resource, $http) {

        var self = this;
        var url = 'https://api.github.com/repos/jquery/jquery/issues';

        $http.get(url)
            .success(function(data) {
                self.tableParams = new NgTableParams({}, { dataset: data });
            })



        // var Api = $resource(url, {temp :'@temp'});
        // this.tableParams = new NgTableParams({}, {
        // 	getData: function($defer, params) {

        // 		console.log('==========');
        // 		console.log(params);
        // 		console.log(params.url());

        // 		// ajax request to api
        // 		return Api.query(params.url()).$promise.then(function(data) {

        // 			 params.total(data.inlineCount); // recal. page nav controls
        // 			return data;
        // 		});
        // 	}
        // });

    }
})();
