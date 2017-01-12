'use strict';
var data = require("../data/friends.js");

module.exports = function(app){

    // json of all available friends
    app.get("/api/friends", function(req, res){
        res.json(data);
    });

    // handles incoming survey results
    app.post("/api/friends", function(req, res){

    });
}