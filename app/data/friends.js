"use strict";
var friendsArray = [{
    name: "Yoda",
    scores: [1, 5, 1, 5, 1, 5, 1, 5, 1, 5],
}, {
    name: "Darth Maul",
    scores: [1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
}, {
    name: "Obi Wan Kenobi",
    scores: [1, 3, 1, 3, 1, 3, 1, 3, 1, 3],
}, {
    name: "Darth Vader",
    scores: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
}, {
    name: "Kylo Ren",
    scores: [2, 5, 2, 5, 2, 5, 2, 5, 2, 5],
}, {
    name: "Ahsoka Tano",
    scores: [5, 4, 5, 4, 5, 4, 5, 4, 5, 4],
}, {
    name: "Luke Skywalker",
    scores: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
}, {
    name: "Princess Leia",
    scores: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
}, {
    name: "Han Solo",
    scores: [2, 2, 4, 2, 4, 2, 2, 4, 4, 4],
}, {
    name: "Leader Snoke",
    scores: [5, 5, 4, 4, 4, 1, 1, 1, 2, 3],
}];

//export friends array. This makes it accessible to other files using require.
module.exports =  {
    friendsArray: friendsArray,
};