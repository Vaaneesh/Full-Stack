"use strict";
function fun(fn) {
    setTimeout(fn, 1000);
}
fun(function () {
    console.log("Yo sup");
});
