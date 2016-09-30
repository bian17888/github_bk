/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

angular.module('ngclassApp', [])
	.controller('NgclassController', function () {

		var self = this;

		self.messageText = "默认状态";
		self.isError = false;
		self.isWarning = false;

		self.errorTip = function(){
			self.messageText = "error状态";
			self.isError = true;
			self.isWarning = false;
		};

		self.warningTip = function(){
			self.messageText = "warning状态";
			self.isError = false;
			self.isWarning = true;
		};


		self.directory = [
			{"name" : "xx01", "cuisine" : "BBQ"},
			{"name" : "xx02", "cuisine" : "BBQ2"},
			{"name" : "xx03", "cuisine" : "BBQ3"},
			{"name" : "xx04", "cuisine" : "BBQ4"},
		]
		self.trActive = function (index) {
			self.num = index;
		}

	});