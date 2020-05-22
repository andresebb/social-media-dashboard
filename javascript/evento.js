let $checkbox = document.querySelector(".checkbox");
console.log($checkbox)

let $body = document.getElementById("body");
let $header = document.getElementById("header");

let $box1 = document.querySelector(".otra-clase");
let $box2 = document.querySelector(".otra-clase1");
let $box3 = document.querySelector(".otra-clase2");
let $box4 = document.querySelector(".otra-clase3");

let box = [$box1, $box2, $box3, $box4];
console.log(box)


let $boxDown1 = document.querySelector(".box__down1");
let $boxDown2 = document.querySelector(".box__down2");
let $boxDown3 = document.querySelector(".box__down3");
let $boxDown4 = document.querySelector(".box__down4");
let $boxDown5 = document.querySelector(".box__down5");
let $boxDown6 = document.querySelector(".box__down6");
let $boxDown7 = document.querySelector(".box__down7");
let $boxDown8 = document.querySelector(".box__down8");



$checkbox.addEventListener("click", darkVersion);

function quitar(){
    $body.classList.remove("dark__fond");
    $header.classList.remove("dark__fond__header");
    
    for(var i =0; i < box.length; i++){
        box[i].classList.remove("dark__fond__box");
    }
    
    $boxDown1.classList.remove("dark__fond__box");
    $boxDown2.classList.remove("dark__fond__box");
    $boxDown3.classList.remove("dark__fond__box");
    $boxDown4.classList.remove("dark__fond__box");
    $boxDown5.classList.remove("dark__fond__box");
    $boxDown6.classList.remove("dark__fond__box");
    $boxDown7.classList.remove("dark__fond__box");
    $boxDown8.classList.remove("dark__fond__box");
}

function agregar(){
    $body.classList.add("dark__fond");
    
    $header.classList.add("dark__fond__header");
    
    for(var i =0; i < box.length; i++){
        box[i].classList.add("dark__fond__box");
    }

    $boxDown1.classList.add("dark__fond__box");
    $boxDown2.classList.add("dark__fond__box");
    $boxDown3.classList.add("dark__fond__box");
    $boxDown4.classList.add("dark__fond__box");
    $boxDown5.classList.add("dark__fond__box");
    $boxDown6.classList.add("dark__fond__box");
    $boxDown7.classList.add("dark__fond__box");
    $boxDown8.classList.add("dark__fond__box");
}

function darkVersion(){
    if($body.classList.contains("dark__fond")){
        quitar();
    }else {
        agregar();
    }
}