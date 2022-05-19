let userInput = [];
let greenSound;
let redSound;
let yellowSound;
let blueSound;
let wrongSound;

greenSound = new Audio('sounds/green.mp3');
redSound = new Audio('sounds/red.mp3');
yellowSound = new Audio('sounds/yellow.mp3');
blueSound = new Audio('sounds/yellow.mp3');
wrongSound = new Audio('sounds/wrong.mp3');


window.addEventListener('keydown', function() {
    let object = document.getElementById("green");
    object.style.color = "white";

})

let red = document.getElementById("red");
red.onclick = function(){
    userInput.push("1")
}

let green = document.getElementById("green");
green.onclick = function(){
    userInput.push("0")
}
console.log("asij")
console.log(userInput)