"use strict";
let arr = [1, 2, 3, 4];
let st = ["a", "b", "c"];
function getData(user) {
    // console.log(user);
    user.forEach(u => console.log(u));
}
function isLegall(user) {
    let res = user.filter((u) => u.age > 18);
    return res;
}
let user = [
    { name: "vasu",
        age: 21,
    },
    {
        name: "ashu",
        age: 28
    },
    {
        name: "abcd",
        age: 15
    }
];
getData(user);
console.log(isLegall(user));
