var express = require('express');
var router = express.Router();
// controllers
var api = require('../controllers/api');

// API index
// it will returning json object
router.get('/', api.index);
// this one will return arrray
router.get('/array', api.array)

module.exports = router;