//union type
type stringorNumber=string | number;
function printId(id:stringorNumber){
    console.log(id);
}
printId(12);


//intersection type
type Person1={
    name:string,
    age:number,
}
type Manager1={
    name:string,
    dept:string
}
type Employee1= Person1 & Manager1;

function printEmp(emp:Employee1){
    console.log(emp);
}
printEmp({name:"vasu",age:21,dept:"cse"});