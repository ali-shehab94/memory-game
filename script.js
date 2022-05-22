//setting variables

let userInput = [];
let greenSound;
let redSound;
let yellowSound;
let blueSound;
let wrongSound;
let endGame = false;
let btnSound;
let btnColor;
let randNumber;
let numberArray = [];
let level = 1;

//importing sounds

greenSound = new Audio('sounds/green.mp3');
redSound = new Audio('sounds/red.mp3');
yellowSound = new Audio('sounds/yellow.mp3');
blueSound = new Audio('sounds/blue.mp3');
wrongSound = new Audio('sounds/wrong.mp3');

//assigning DOM elements to variables
let wrapper = document.getElementById("body");
let displayText = document.getElementById("display-msg");
let green = document.getElementById("green")
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

//keydown at body element will start the game
body.addEventListener("keydown", function() {gameStart()});


function gameStart() {
    endGame = false;
    //removes any DOM manipulation from the previous match
    body.style.background = null;
    displayText.innerText = "Level " + level;
    //this function runs the whole operation of creating a random number, storing it's value, and displays changes (flashes)
    setTimeout(() => {
        activateButton(randomPattern())
    },500);
    //promptUser is the function that analyzes the user input
    green.onclick = function() {promptUser('green')};  
    red.onclick = function() {promptUser('red')};  
    yellow.onclick = function() {promptUser('yellow')};  
    blue.onclick = function() {promptUser('blue')};
}

//this function stores user input (button click) into an array, 
function promptUser(button){
    userInput.push(String(button));
    activateButton(String(button));
    for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] != numberArray[i]){
                gameOver();
            }
    }if (endGame == false) {
        if (userInput.length == numberArray.length) {
            userInput = []
            level += 1;
            displayText.innerText = "Level " + level;
            setTimeout(function (){
                gameStart()
            }, 1000);
        }
    }
}

//generates random number from 0 to 3 and saves it is a list
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

//returns the last color in the list. it's return will be placed in activateButton function
function randomPattern() {
    generateColor()
    return(String(numberArray.at(-1)))
}



//this function displays changes to a button when clicked, and plays it's sound, it takes it's color from the above function
function activateButton(color) {
    console.log(numberArray)
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

//reverts color to original after being changed by activateButton function
function revertColor(button) {
    button.style.background = null;
}



function gameOver() {
    endGame = true;
    displayText.innerText = "Game Over! You Lost (ಥ﹏ಥ) Press Any Key To Play Again";
    wrapper.style.backgroundColor = "red"
    wrongSound.play()
    userInput = []
    numberArray = []
    level = 1;
}