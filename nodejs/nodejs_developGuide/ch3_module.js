// module.js

var name;

exports.setName = function(nm){
	return name = nm;
};
exports.sayHello = function(){
	console.log('hello:'+name);
}
