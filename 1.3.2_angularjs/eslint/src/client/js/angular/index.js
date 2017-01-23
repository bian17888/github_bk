/**
 * @fileOverview angular
 * @desc
 * @author bian17888 17/1/22 15:49
 */
angular
	.module('hellpApp', [])
	.controller('Hello', Hello);

function Hello() {
  var vm = this;
  vm.greeting = { text: 'bian17888' };
}
