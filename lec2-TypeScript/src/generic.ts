type myarr=string[] | number[];
function getFirst(arr:myarr){
    return arr[0];
}
let arr1=[1,2,3,4];
let arr2=["ab","cd","ef"];
console.log(getFirst(arr1));
console.log(getFirst(arr2));


function identity<T>(arg:T){
    // console.log(arg);
    return arg;
}
// let output1=identity("vasu");
let output1=identity<string>("vasu");
// let output2=identity(44);
let output2=identity<number>(44);
console.log(output1+" "+output2);

function identity2<T>(arg:T[]){
    // console.log(arg);
    return arg[0];
}
let output3=identity2<string>(arr2);
console.log(output3);