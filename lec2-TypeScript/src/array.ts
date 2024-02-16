let arr:number[]=[1,2,3,4];

let st:string[]=["a","b","c"];

interface User1{
    name:string,
    age:number
}
function getData(user:User1[]){
    // console.log(user);
    user.forEach(u=>console.log(u));
}
function isLegall(user:User1[]){
    let res=user.filter((u)=>u.age>18);
    return res;
}
let user=[
    {name:"vasu",
    age:21,
    },
    {
        name:"ashu",
        age:28
    },
    {
        name:"abcd",
        age:15
    }

]
getData(user)
console.log(isLegall(user));