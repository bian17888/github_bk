/**
 * Created by biankai on 15/1/8.
 */
function Animal () {
	this.name = "";
	this.legCounts = 0;
	this.feed = function (food) {
		console.log(this.name + " fed " + food);
	}
}