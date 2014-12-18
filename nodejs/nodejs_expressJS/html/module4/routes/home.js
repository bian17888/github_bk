/**
 * Created by biankai on 14/12/17.
 */

exports.index = function (req, res) {
    res.render('home/index');
}

exports.contact = function (req, res) {
    res.render('home/contact', {email: 'mail@company.com', telephone:'1-900-EXPRESS'});
}