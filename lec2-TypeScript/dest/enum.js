"use strict";
function game(keypress) {
    //
}
game("up");
var keyGame;
(function (keyGame) {
    keyGame[keyGame["up"] = 0] = "up";
    keyGame[keyGame["down"] = 1] = "down";
    keyGame[keyGame["left"] = 2] = "left";
    keyGame[keyGame["right"] = 3] = "right";
})(keyGame || (keyGame = {}));
function game2(keypress) {
    if (keypress == keyGame.up) {
    }
}
game2(keyGame.up);
console.log(keyGame.up);
