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

let playing = false;
let btnSound;
let btnColor;
let randNumber;
let numberArray = [];
let level = 1;
let wrapper = document.getElementById("game-wrapper");
let displayText = document.getElementById("display-msg");

let green = document.getElementById("green")
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

function generateColor() {
    randNumber = (Math.floor(Math.random() * 4))
    if (randNumber == 0) {
        return numberArray.push("green")
    }else if (randNumber == 1) {
        return numberArray.push("red")
    }else if (randNumber == 2) {
        return numberArray.push("yellow")
    }else if (randNumber == 3) {
        return numberArray.push("blue")
    }
}
// green.onclick = function() {
    // userInput.push("green");

function revertColor(button) {
    button.style.background = null;
}

function promptUser(button){
    activateButton(button);
    userInput.push(String(button))
    if (numberArray.at(-1) == userInput.at(-1)) {
        level += 1
        setTimeout(gameStart, 1000);
        console.log(userInput)
    }else {
        console.log("You Lose");
        console.log(numberArray, userInput)
    }
}

function activateButton(color) {
    if (color == "green") {
        greenSound.play();
        green.style.background = "white";
        setTimeout(() => {revertColor(green)}, 200);
    }else if (color == "red") {
        redSound.play()
        red.style.background = "white";
        setTimeout(() => {revertColor(red)}, 200);
    }else if (color == "yellow") {
        yellowSound.play()
        yellow.style.background = "white";
        setTimeout(() => {revertColor(yellow)}, 200);
    }else if (color == "blue") {
        blueSound.play()
        blue.style.background = "white";
        setTimeout(() => {revertColor(blue)}, 200);
    }
}


function randomPattern() {
    generateColor()
    return(String(numberArray.at(-1)))
}



function gameStart() {
        displayText.innerText = "Level " + level;
        activateButton(randomPattern());
        green.addEventListener("click", function(){promptUser('green')});
        red.addEventListener("click", function(){promptUser('red')});
        yellow.addEventListener("click", function(){promptUser('yellow')});
        blue.addEventListener("click", function(){promptUser('blue')});
        
}







    //     








    // yellow.onclick = function(){
    //     yellowSound.play()
    //     yellow.style.background = "white";
    //     userInput.push("2")
    // }



    // blue.onclick = function(){
    //     blueSound.play()
    //     blue.style.background = "white";
    //     userInput.push("3")
        
    // }



// function numConverter(number) {
//     if (number == 0){
//         btnSound = greenSound;
//         btnColor = green;
//     }else if (number == 1){
//         btnSound = redSound;
//         btnColor = red;
//     }else if (number == 2){
//         btnSound = yellowSound;
//         btnColor = yellow;
//     }else if (number == 3){
//         btnSound = blueSound;
//         btnColor = blue;
//     }
// }



//create a list of 15 random numbers that will determine the color pattern





        
        // for (let i = 0; i < numberArray.length; i++){
        //     if (numberArray [i] =
        // }
        // for (let i in numberArray) {
        //     if i 
        // }
        
        
//         








// if (randNumber == 0){
//     green.getElementById("green").click();
// }else if (randNumber == 1){
//     green.getElementById("red").click()
// }