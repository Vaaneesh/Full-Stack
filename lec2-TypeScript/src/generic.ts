type myarr=string[] | number[];
function getFirst(arr:myarr){
    return arr[0];
}
let arr1=[1,2,3,4];
let arr2=["ab","cd","ef"];
console.log(getFirst(arr1));
console.log(getFirst(arr2));
