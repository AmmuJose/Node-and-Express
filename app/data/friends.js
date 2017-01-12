"use strict";
var friendsArray = [{
    name: "Yoda",
    scores: [5, 4, 3, 1, 4],
}, {
    name: "Darth Maul",
    scores: [1, 4, 5, 5, 4],
}, {
    name: "Obi Wan Kenobi",
    scores: [3, 3, 5, 5, 4],
}, {
    name: "Rey",
    scores: [5, 5, 2, 2, 4],
}, {
    name: "Kylo Ren",
    scores: [3, 5, 2, 1, 5],
}];

//export friends array. This makes it accessible to other files using require.
module.exports = friendsArray;