function fun(fn:()=>void){
    setTimeout(fn,1000);
}
fun(function(){
    console.log("Yo sup");
})
