/**
 * Created by bian17888 on 15/12/1.
 */

var koa = require('koa');
var _ = require('koa-route');

var request = require('superagent');

var app = koa();

app.use(_.get('/', function *(){

	var resbody = yield _superagent_get();
	this.status =200;
	this.response.body = resbody.text

}))


/**
 * get 请求转发
 * @param uid
 * @returns {Function}
 * @private
 */
function _superagent_get(uid) {
	return function (callback) {
		request
			.get('sneezryworks.sinaapp.com/ip.php')
			.end(function (err, res) {
				callback(err, res)
			})
	}
}



app.listen('3001');
console.log('server is running on port 3001 ');