let obj={
    a:"10"
}
let obj2={
    name:"vasu",
    age:"21"
}
console.log(obj);
console.log(obj2);
//_proto_

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// let p1=new Person("ashu","28");
// console.log(p1);


//main part
function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
Person.prototype.getFullName=function(){
    console.log(this.firstName+" "+this.lastName);
}
let p1=new Person("Vaaneesh","Prabhakar","21");
let p2=new Person("Ashutosh","Prabhakar","27");
console.log(p1);
console.log(p2);
console.log(p2.getFullName());