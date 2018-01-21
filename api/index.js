var express = require('express');
var router = express.Router();
// controllers
var api = require('../controllers/api');

// API index
// it will returning json object
// router.get('/', api.index);

router.get('/', api.array)
// this one will return arrray

module.exports = router;