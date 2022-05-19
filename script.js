let userInput = [];
let greenSound;
let redSound;
let yellowSound;
let blueSound;
let wrongSound;

greenSound = new Audio('sounds/green.mp3');
redSound = new Audio('sounds/red.mp3');
yellowSound = new Audio('sounds/yellow.mp3');
blueSound = new Audio('sounds/blue.mp3');
wrongSound = new Audio('sounds/wrong.mp3');

let randNumber
let numberArray = []
let level = 0


let displayText = document.getElementById("display-msg")

for (let i = 0; i < 15; i++){
    level += 1;
    level.innerText = "Level $`level`"
    randNumber = (Math.floor(Math.random() * 4))
    if (randNumber == 0){
        green.getElementById("green").click();
    }else if (randNumber == 1){
        green.getElementById("red").click()
    }
    
    numberArray.push(randNumber)
        let green = document.getElementById("green");
        green.onclick = function(){
            greenSound.play()
            userInput.push("0")
        }


        let red = document.getElementById("red");
        red.onclick = function(){
            redSound.play()
            userInput.push("1")
        }


        let yellow = document.getElementById("yellow");
        yellow.onclick = function(){
            yellowSound.play()
            userInput.push("2")
        }


        let blue = document.getElementById("blue");
        blue.onclick = function(){
            blueSound.play()
            userInput.push("3")
            
        }

console.log(numberArray)

window.addEventListener('keydown', function() {
    let object = document.getElementById("green");
    object.style.color = "white";

})



}

console.log("asij")
console.log(userInput)