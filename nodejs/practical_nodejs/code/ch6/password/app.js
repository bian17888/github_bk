// 1 引入依赖
var path = require('path');
var http = require('http');
var express = require('express');
var routes = require('./routes');
var mongoskin = require('mongoskin'),
	dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog',
	db = mongoskin.db(dbUrl, {safe : true}),
	collections = {
		articles : db.collection('articles'),
		users : db.collection('users')
	};
// 1.1 配置Express.js 中间件
var session = require('express-session'),
	errorHandler = require('errorhandler'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

var app = express();
app.locals.appTitle = 'blog-express';


// 2 配置Express.js
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// 3 连接数据库
// 4 设置中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('3CCC4ACD-6ED1-4844-9217-82131BDCB239'));
app.use(session({secret: '2C44774A-D649-4D44-9535-46E296EF984F'}))
app.use(methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// 从数据库中获取 articles + users, 并存储在 req.collections 中
app.use(function(req, res, next) {
	if (!collections.articles || ! collections.users) return next(new Error('No collections.'))
	req.collections = collections;
	return next();
});

// 鉴定中间件 :
app.use(function (req, res, next) {
	if(req.session && req.session.admin )
		res.locals.admin = true;
	next();
});

// 定义授权中间件 : 作为公共验证模块
var authorize = function (req, res, next) {
	if(req.session && req.session.admin )
		return next()
	else
		return res.send(401)
}


// 5 设置路由
app.get('/', routes.index);
app.get('/login', routes.user.login);
app.post('/login', routes.user.authenticate);
app.get('/logout', routes.user.logout);
app.get('/admin', authorize, routes.article.admin);
app.get('/post', authorize, routes.article.post);
app.post('/post', authorize, routes.article.postArticle);
app.get('/articles/:slug', routes.article.show);

// 5.1 REST API ROUTES
app.all('/api', authorize);
app.get('/api/articles', routes.article.list);
app.post('/api/articles', routes.article.add);
app.put('/api/articles/:id', routes.article.edit);
app.del('/api/articles/:id', routes.article.del);

app.all('*', function(req, res) {
	res.send(404);
})

// 6 启动应用
var server = http.createServer(app);
var boot = function(){
	server.listen(app.get('port'),function(){
		console.info('App is running on port ' + app.get('port'));
	})
};
var shutdown = function () {
	server.close();
}

if( require.main === module ) {
	boot();
} else {
	console.info('Running app as a module');
	exports.boot = boot;
	exports.shutdown = shutdown;
	exports.port = app.get('port');
}
// 7 在多核系统上启动 cluster 多核处理模块(可选)
// 8 以模块形式输出应用(可选)