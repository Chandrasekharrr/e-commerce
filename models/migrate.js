var mongoose = require('mongoose');
var schema = require('./Schema');
var {post} = require('../api/dummyData.json')

mongoose.connect('mongodb://localhost/recommerce');

schema.create(...post, (err, res) => {
    if (err) console.error(err)

    console.log(res)
})