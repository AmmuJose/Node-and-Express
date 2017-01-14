'use strict';
var data = require("../data/friends.js");
module.exports = function (app) {

    // json of all available friends
    app.get("/api/friends", function (req, res) {
        res.json(data.friendsArray);
    });

    // handles incoming survey results
    app.post("/api/friends", function (req, res) {
        console.log(req.body.score);
        var userInput = req.body.score;
        var arrayAbs = [];
        data.friendsArray.forEach(function (element) {
            var superHeroScores = element.scores;
            //console.log(element.scores.indexOf(Math.max.apply(Math, element.scores))); 
            var diff = 0;
            for (var i = 0; i < superHeroScores.length; i++) {
                diff += Math.abs(superHeroScores[i] - userInput[i]);
            }
            arrayAbs.push(diff);
        });
        console.log(arrayAbs);
        var matchingIndex = 0;
        var value = arrayAbs[0];
        for (var i = 1; i < arrayAbs.length; i++) {
            if (arrayAbs[i] < value) {
                value = arrayAbs[i];
                matchingIndex = i;
            }
        }       
        console.log("matchingIndex val: " + matchingIndex);
        res.json(data.friendsArray[matchingIndex].name);
    });
}