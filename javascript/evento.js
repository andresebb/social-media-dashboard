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

/*
for(var i =0; i < box.length; i++){
    box[i].classList.add("dark__fond__box");
}

*/

let boxes__down = document.querySelectorAll(".overview__container__son")


/*
for(var i = 0; i < boxes__down.length; i++){
    boxes__down[i].classList.add("dark__fond__box");
}
*/



$checkbox.addEventListener("click", darkVersion);

function quitar(){
    $body.classList.remove("dark__fond");
    $header.classList.remove("dark__fond__header");
    
    for(var i =0; i < box.length; i++){
        box[i].classList.remove("dark__fond__box");
    }
    
    for(var i = 0; i < boxes__down.length; i++){
        boxes__down[i].classList.remove("dark__fond__box");
    }
}

function agregar(){
    $body.classList.add("dark__fond");
    
    $header.classList.add("dark__fond__header");
    
    for(var i =0; i < box.length; i++){
        box[i].classList.add("dark__fond__box");
    }

    for(var i = 0; i < boxes__down.length; i++){
        boxes__down[i].classList.add("dark__fond__box");
    }
    console.log(boxes__down);
}

function darkVersion(){
    if($body.classList.contains("dark__fond")){
        quitar();
    }else {
        agregar();
    }
}