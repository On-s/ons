// test.js

console.log ('Hellow');

document.write ('<h1 id="warp">Hellow</h1>');


$(document).ready(function(){
    $(".menu>div").click(function(){
        $(this).next("ul").toggleClass("hide");
    });
});