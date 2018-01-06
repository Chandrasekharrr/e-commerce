"use  strict";

var mongoose = require('mongoose');
var schema = mongoose.Schema;

const postSchema = new schema({
    id: {type: Number, required: true} ,
    title: {type: String, required: true},
    imageSrc: String,
    description: String
},{
    timestamps: true
})

module.exports = mongoose.model('postData', postSchema)