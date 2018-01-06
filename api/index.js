var express = require('express');
var router = express.Router();
var Schema = require('../models/Schema');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recommerce')

// API index
router.get('/', (req, res, next) => {
    Schema.find({}, function (err, result) {
        if(err) throw err;
        else {
            let data = result.reduce((obj, data) => {
                obj[data._id] = data;
                return obj;
            }, {})
            res.json({post: data})
        }
    })
});

module.exports = router;