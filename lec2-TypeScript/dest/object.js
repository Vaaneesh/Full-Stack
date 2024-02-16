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
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello" + this.name);
    }
}
let e1 = new Employee("Vasu", 22);
e1.greet();
class EMP {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.dept = c;
    }
    greet() {
        console.log("Yo" + this.name);
    }
}
function getemp(emp) {
    console.log(emp.age);
}
let e2 = new EMP("vasu", 21, "cse");
