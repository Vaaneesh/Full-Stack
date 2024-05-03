// function outer(){
//     let a=10;
//     let b=20;
//     function inner(){
//         a++;
//         b++;
//         console.log(a);
//         console.log(b);
//     }
//     return inner;
// }
// let f1=outer();
// f1();
// let f2=outer();
// f2();
function memo(){
    let obj={};
    function multiplyby5(inp){
        console.log(obj);
        if(obj[inp]){
            console.log("memo");
            return console.log(obj.inp);
        }
        let res=5*inp;
        console.log("not memo");
        console.log(res);
        obj[inp]=res;
    }
    return multiplyby5;
}
let f1=memo();
f1(4);
f1(4);
f1(5);
f1(5);