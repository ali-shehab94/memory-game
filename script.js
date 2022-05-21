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

let endGame = false;
let btnSound;
let btnColor;
let randNumber;
let numberArray = [];
let level = 1;
let wrapper = document.getElementById("body");
let displayText = document.getElementById("display-msg");

let green = document.getElementById("green")
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

body.addEventListener("keydown", function() {gameStart()});

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
    userInput.push(String(button))
    activateButton(String(button));
    console.log(userInput)
    for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] != numberArray[i]){
                gameOver();
                userInput = []
            }
    }if (endGame == false) {
        if (userInput.length == numberArray.length) {
            userInput = []
            level += 1;
            displayText.innerText = "Level " + level;
            setTimeout(function (){
                activateButton(randomPattern())
            }, 1000);
        }
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
        body.style.background = null;
        displayText.innerText = "Level " + level;
        setTimeout(() => {
            activateButton(randomPattern())
        },700);
        green.addEventListener("click", function(){promptUser('green')});
        red.addEventListener("click", function(){promptUser('red')});
        yellow.addEventListener("click", function(){promptUser('yellow')});
        blue.addEventListener("click", function(){promptUser('blue')});
}

// function gameStart2() {
//     body.style.background = null;
//     displayText.innerText = "Level " + level;
//     setTimeout(() => {
//         activateButton(randomPattern())
//     },700);
// }

function gameOver() {
    endGame = true;
    displayText.innerText = "Game Over! You Lost (ಥ﹏ಥ) Press Any Key To Play Again";
    wrapper.style.backgroundColor = "red"
    wrongSound.play()
    userInput = []
    numberArray = []
    level = 1;
    green.removeEventListener("mousedown", function(){promptUser('green')}, true);  
    red.removeEventListener("mousedown", function(){promptUser('red')}, true);  
    yellow.removeEventListener("mousedown", function(){promptUser('yellow')}, true);  
    blue.removeEventListener("mousedown", function(){promptUser('blue')}, true);  
    // body.addEventListener("keydown", function() {gameStart2()}, {once : true});
    element.removeEventListener("mousedown", handleMouseDown, true);  
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