"use strict";
var friendsArray = [{
    name: "Yoda",
    scores: [5, 4, 3, 1, 4, 2, 1, 3, 5, 4],
}, {
    name: "Darth Maul",
    scores: [1, 4, 5, 5, 4, 1, 2, 5, 5, 5],
}, {
    name: "Obi Wan Kenobi",
    scores: [3, 3, 5, 5, 4, 3, 3, 1, 2, 2],
}, {
    name: "Darth Vader",
    scores: [5, 5, 2, 2, 4, 1, 1, 1, 2, 3],
}, {
    name: "Kylo Ren",
    scores: [3, 5, 2, 1, 5, 5, 5, 5, 4, 4],
}, {
    name: "Ahsoka Tano",
    scores: [5, 4, 5, 5, 4, 3, 3, 5, 5, 5],
}, {
    name: "Luke Skywalker",
    scores: [1, 3, 5, 5, 4, 3, 3, 1, 3, 5],
}, {
    name: "Princess Leia",
    scores: [1, 1, 2, 2, 4, 1, 1, 1, 2, 3],
}, {
    name: "Han Solo",
    scores: [3, 3, 5, 5, 4, 3, 3, 4, 4, 4],
}, {
    name: "Leader Snoke",
    scores: [5, 5, 4, 4, 4, 1, 1, 1, 2, 3],
}];

//export friends array. This makes it accessible to other files using require.
module.exports =  {
    friendsArray: friendsArray,
};