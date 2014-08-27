/*
 * photo.js
 */

var photos = [];
photos.push({
	name:'NODE.js Logo',
	path:'http://www.nodejs.org/images/roadshow-promo.png'
});
photos.push({
	name:'Ryan Speaking',
	path:'http://www.nodejs.org/images/walmart-thumb.jpg'
});

exports.list = function(req, res) {
    res.render('photos', {
    	title:'photos list',
    	photos:photos
    });
};
