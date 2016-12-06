/**
 * @fileOverview books
 * @desc
 * @author bian17888 16/11/28 15:14
 */

var MongoClient = require('mongodb').MongoClient,
	ObjectId = require('mongodb').ObjectID,
	assert = require('assert');

var url = 'mongodb://localhost:27017/quickstart';

module.exports = {
	findCollection    : findCollection,
	findCollectionById: findCollectionById,
	insertCollection  : insertCollection,
	updateCollection  : updateCollection,
	updateCollectionAttribute : updateCollectionAttribute
};

//////////////////////////////////////////////////

function findCollection(name, query) {
	return function (fn) {
		MongoClient.connect(url, function (err, db) {
			var collection = db.collection(name);
			collection.find(query).toArray(function (err, result) {
				fn(null, result);
				db.close();
			});
		});
	}
}

function findCollectionById(name, id) {
	return function (fn) {
		MongoClient.connect(url, function (err, db) {
			var collection = db.collection(name);
			var query = {
				'_id': new ObjectId(id)
			};
			collection.findOne(query, function (err, result) {
				fn(null, result);
				db.close();
			});
		});
	}
}

function insertCollection(name, newObj) {
	return function (fn) {
		MongoClient.connect(url, function (err, db) {
			var collection = db.collection(name);
			collection.insertOne(newObj, function (err, result) {
				fn(null, result);
				db.close();
			});
		});
	}
}

function updateCollection(name, id, newObj) {
	return function (fn) {
		MongoClient.connect(url, function (err, db) {
			var collection = db.collection(name);
			var oldObj = {
				'_id': new ObjectId(id)
			};
			collection
				.updateOne(oldObj, newObj)
				.then(function (result) {
					fn(null, result);
					db.close();
				});
		});
	}
}

function updateCollectionAttribute(name, id, newObj) {
	return function (fn) {
		MongoClient.connect(url, function (err, db) {
			var collection = db.collection(name);
			var oldObj = {
				'_id': new ObjectId(id)
			};
			collection
				.updateOne(oldObj, {$set : newObj})
				.then(function (result) {
					fn(null, result);
					db.close();
				});
		});
	}
}