"use strict";
let num = 7;
// num="hello";
// num=true;
console.log(num);
// let b:boolean=true;
let s = "Hello";
// console.log(b);
// console.log(s);
//type inferencing
function greet(name) {
    console.log("Wassup " + name);
}
greet("vasu");
function sum(a, b) {
    return (a + b);
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age > 18)
        return true;
    else
        return false;
}
console.log(isLegal(17));
