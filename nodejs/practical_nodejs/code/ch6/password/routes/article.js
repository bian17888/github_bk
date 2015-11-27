/**
 * 文章列表页
 */
function show(req, res, next) {
	if (!req.params.slug) return next(new Error('No article slug.'));
	req.collections.articles.findOne({slug: req.params.slug}, function (error, article) {
		if (error) return next(error);
		if (!article.published && !req.session.admin) return res.send(401);
		res.render('article', article);
	});
};

/**
 * 创建文章页面
 */
function post(req, res, next) {
	res.render('post');
}

/**
 * 创建文章
 */
function postArticle(req, res, next) {
	var title = req.body.title,
		slug = req.body.slug,
		text = req.body.text,
		published = false;

	if (!title || !slug || !text)
		return res.render('post', {error: "Fill title, slug and text."});

	var article = {
		title    : title,
		slug     : slug,
		text     : text,
		published: published
	}

	req.collections.articles.insert(article, function (error, articleResponse) {
		if (error) return next(error);
		res.render('post', {error: "Article was added. Publish it on Admin page."});
	})
}

/**
 * 管理员页面
 */
function admin(req, res, next) {
	req.collections.articles.find({}, {sort: {_id: -1}}).toArray(function (error, articles) {
		if (error) return next(error);
		res.render('admin', {articles: articles});
	});
}

/*
 * GET articles API.
 */

function list(req, res, next) {

};

/*
 * POST article API.
 */

function add(req, res, next) {

};

/*
 * PUT article API.
 */

function edit(req, res, next) {
	var id = req.params.id;
	if (!id) return next(new Error('No article ID'));
	req.collections.articles.updateById(id, {$set: req.body.article}, function (error, count) {
		if (error) return next(error);
		res.send({affectedCount: count});
	})
};

/*
 * DELETE article API.
 */

function del(req, res, next) {
	var id = req.params.id;
	if (!id) return next(new Error('No article ID'))
	req.collections.articles.removeById(id, function (error, count) {
		if (error) return next(error);
		res.send({affectedCount: count});
	})
};

/**
 * Export modules
 */
module.exports = {
	show       : show,
	admin      : admin,
	post       : post,
	postArticle: postArticle,
	list       : list,
	add        : add,
	edit       : edit,
	del        : del
}