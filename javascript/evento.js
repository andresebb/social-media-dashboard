let $checkbox = document.querySelector(".checkbox");
console.log($checkbox)

let $body = document.getElementById("body");
let $header = document.getElementById("header");
let $box = document.querySelectorAll("div.social__boxes");
console.log($box)

$checkbox.addEventListener("click", darkVersion);

function darkVersion(){
    if($body.classList.contains("dark__fond")){
        $body.classList.remove("dark__fond");
        $header.classList.remove("dark__fond__header");
    }else {
        $body.classList.add("dark__fond");
        $header.classList.add("dark__fond__header");
    }
}