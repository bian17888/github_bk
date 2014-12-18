/**
 * Created by biankai on 14/12/17.
 */

exports.id = function (req, res) {
    res.send('Customer selected is '+ req.params['id']);
};

exports.query = function (req, res) {
    res.send('Customer selected is '+ req.query.id);
};

exports.expreg = function(req, res){
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range of values using expressions for /range/ '+ from + '..' + to);
}