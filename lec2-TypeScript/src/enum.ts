type keyInput="up"|"down"|"left"|"right";
type keyInput2=0|1|2|3;
function game(keypress:keyInput){
    //
}
game("up");
 
enum keyGame{        //name constant banane ke liye enum use hota hai for limited values
    up,
    down,
    left,
    right
}
function game2(keypress:keyGame){
    if(keypress==keyGame.up){

    }
}
game2(keyGame.up);
console.log(keyGame.up);