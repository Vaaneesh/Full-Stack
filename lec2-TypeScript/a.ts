let num:number=7;
// num="hello";
// num=true;
console.log(num);
// let b:boolean=true;
let s:string="Hello";
// console.log(b);
// console.log(s);

//type inferencing
function greet(name:string){
    console.log("Wassup "+name);
}
greet("vasu");

function sum(a:number,b:number):number{
    return(a+b);
}
console.log(sum(2,3));

function isLegal(age:number):boolean{
    if(age>18)
    return true;
    else return false;
}
console.log(isLegal(17));