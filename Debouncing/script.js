let input=document.getElementById("myinput");
function getData(){
    console.log("Getting data");
}
function debounce(){
    let id;
    return function inner(){
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(()=>{
            getData();
        },1000)
    }
}
input.addEventListener("keypress",debounce());
//function ko delay krwana DEBOUNCING bolte hai