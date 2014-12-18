/**
 * Created by biankai on 14/12/17.
 */

exports.index = function (req, res) {
    res.send('Home page' + app.get('title'));
};