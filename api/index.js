var express = require('express');
var router = express.Router();

// data JSON
var contentPost = require('./dummyData.json');

router.get('/', (req, res, next) => {
    res.json(contentPost);
})

module.exports = router;