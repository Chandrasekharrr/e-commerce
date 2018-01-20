"use strict";

var Schema = require('../models/Schema');

module.exports = {
    // Showing json Object
    index : function (req, res, next) {
        Schema.find({}, function (err, result) {
            // Convert array to array object
            let convert = result.reduce((obj, data) => {
                obj[data._id] = data;
                return obj;
            }, {})

            err ? res.send(err) : res.json({post : convert})
        })
    },
    // Showing json array
    array : function (req, res, next) {
        Schema.find({}, function (err, result) {
            err ? res.send(err) : res.json(result)
        })        
    } 
}