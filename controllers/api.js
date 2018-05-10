"use strict";

var Schema = require('../models/Schema');

function a (b, c, d) {
    b ? c.send(b) : c.json({post: d})
}

module.exports = {
    // Showing json Object
    index : function (req, res, next) {
        Schema.find({}, function (err, result) {
            // Convert array to array object
            let e = result.reduce((f, g) => {
                f[g._id] = g; return f;
            }, {}); a(err, res, e)
        })
    },
    // Showing json array
    array : function (req, res, next) {
        Schema.find({}, (err, result) => { a(err, res, result) })
    } 
}