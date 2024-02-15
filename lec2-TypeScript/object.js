"use strict";
let u1 = {
    name: "vasu",
    age: 20
};
// function userAge(user:{
//     name:string,
//     age:number
// })
function printAge(user) {
    console.log(user.age);
}
function getName(user) {
    console.log(user.name);
}
printAge(u1);
getName(u1);
