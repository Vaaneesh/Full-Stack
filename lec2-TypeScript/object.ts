interface User{
    name:String,
    age:number
}
let u1={
    name:"vasu",
    age:20
}
// function userAge(user:{
//     name:string,
//     age:number
// })
function printAge(user:User){
    console.log(user.age);
}
function getName(user:User){
    console.log(user.name);
}
printAge(u1);
getName(u1);

interface Person{
    name:string,
    age:number,
    greet:()=>void
}
class Employee implements Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():void{
        console.log("Hello"+this.name);
    }
}