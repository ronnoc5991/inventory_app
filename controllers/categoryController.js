//import the models that we will be accessing
var Category = require('../models/category');
var Item = require('../models/item');
var async = require('async');

//functions are written and exported here... these functions are to be called from the router when a request is received

exports.categories_list = (req, res, next) => {
    Category.find()
        .exec(function(err, list_categories) {
            if (err) { return next(err) }
            res.render('categories_list', { title: 'All Categories', categories_list: list_categories });
        });
};

exports.category_detail = (req, res, next) => {
    async.parallel({
        category: function(callback) {
            Category.findById(req.params.id)
                .exec(callback)
        },
        category_items: function(callback) {
            Item.find({ 'category': req.params.id }, 'name description price')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err) }
        if (results.category == null) {
            var err = new Error('Category not found');
            err.status = 404;
            return next(err);
        }
        res.render('category_detail', { title: results.category.name, items: results.category_items });
    }
    )
};