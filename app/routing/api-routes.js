'use strict';
var data = require("../data/friends.js");
module.exports = function(app){

    // json of all available friends
    app.get("/api/friends", function(req, res){
        res.json(data.friendsArray);
    });

    // handles incoming survey results
    app.post("/api/friends", function(req, res){
        console.log(req.body.score);
        var userInput = req.body.score;
        var arrayAbs = [];
        data.friendsArray.forEach(function(element) {
            var superHeroScores = element.scores;
            //console.log(element.scores);
            //console.log(element.scores.indexOf(Math.max.apply(Math, element.scores))); 
            var diff = 0;
            for(var i=0; i < superHeroScores.length ; i++){
                 diff += Math.abs(superHeroScores[i] - userInput[i]);                   
            }
            arrayAbs.push(diff);
        });
        var matchingIndex = arrayAbs.indexOf(Math.max.apply(Math, arrayAbs));
        console.log(arrayAbs);
        console.log();
        console.log()
        res.json(data.friendsArray[matchingIndex].name);
    });
}