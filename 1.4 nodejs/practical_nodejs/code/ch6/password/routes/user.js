/**
 * GET login page.
 */
function login(req, res, next) {
	res.render('login', {message: 'articles'});
}

/**
 * GET logout page.
 */
function logout(req, res, next) {
	req.session.destroy();
	res.redirect('/');
}

/**
 * GET login page.
 */
function authenticate(req, res, next) {
	var email = req.body.email,
		password = req.body.password;

	// 校验是否为空
	if(!email || !password)
		return res.render('login', {error: "Please enter your email and password."});
	// 校验正确性
	req.collections.users.findOne({email : email, password : password},function(error, user){
		if(error) return next(error);
		if(!user) return res.render('login', {error: "Incorrect email&password combination."});
		req.session.user = user;
		req.session.admin = user.admin;
		res.redirect('/admin');
	})

}

/**
 * Export modules
 */
module.exports = {
	login : login,
	logout : logout,
	authenticate : authenticate
}