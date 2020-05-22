let $checkbox = document.querySelector(".checkbox");
console.log($checkbox)

let $body = document.getElementById("body");
console.log($body)


$checkbox.addEventListener("click", darkVersion);

function darkVersion(){
    if($body.classList.contains("light"))
    $body.classList.add("dark__fond");
}
