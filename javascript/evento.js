let $checkbox = document.querySelector(".checkbox");
console.log($checkbox)

let $body = document.getElementById("body");
let $header = document.getElementById("header");

let $box = document.querySelector(".otra-clase");
let $box1 = document.querySelector(".otra-clase1");
let $box2 = document.querySelector(".otra-clase2");
let $box3 = document.querySelector(".otra-clase3");


$checkbox.addEventListener("click", darkVersion);

function darkVersion(){
    if($body.classList.contains("dark__fond")){
        $body.classList.remove("dark__fond");
        $header.classList.remove("dark__fond__header");
        $box.classList.remove("dark__fond__box");
        $box1.classList.remove("dark__fond__box");
        $box2.classList.remove("dark__fond__box");
        $box3.classList.remove("dark__fond__box");

    }else {
        $body.classList.add("dark__fond");
        $header.classList.add("dark__fond__header");
        $box.classList.add("dark__fond__box");
        $box1.classList.add("dark__fond__box");
        $box2.classList.add("dark__fond__box");
        $box3.classList.add("dark__fond__box");
    }
}