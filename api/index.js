var express = require('express');
var router = express.Router();

// data JSON
var contentPost, { post } = require('./dummyData.json');
// Change the data from array object to object
const data = post.reduce((obj, content) => {
                obj[content.id] = content;
                return obj;
            }, {})

// API index
router.get('/', (req, res, next) => {
    res.json({post: data});
})

module.exports = router;