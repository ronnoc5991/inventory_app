var express = require('express');
var router = express.Router();

//impor the controller in order to call the correct functions on receival of request
var category_controller = require('../controllers/categoryController');

//list all categories
router.get('/', category_controller.categories_list);

//show items in a specific category
router.get('/category/:id', category_controller.category_detail)

module.exports = router;