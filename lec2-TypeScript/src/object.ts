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
    greet?:()=>void
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
let e1=new Employee("Vasu",22);
e1.greet();

//extends
// interface Person{
//     name:string,
//     age:number,
// }

interface Employee extends Person{
    dept:string
}
class EMP implements Employee{
    name:string;
    age:number;
    dept:string;
    constructor(a:string,b:number,c:string){
        this.name=a;
        this.age=b;
        this.dept=c;
    }
    greet():void{
        console.log("Yo"+this.name);
    }
}
function getemp(emp:Employee){
    console.log(emp.age);
}
let e2=new EMP("vasu",21,"cse");