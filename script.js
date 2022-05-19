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
let level = 1
let wrapper = document.getElementById("game-wrapper")
let displayText = document.getElementById("display-msg")


function mouseDown(){
    
}

function numConvert(number) {
    if (number == 0){
        return 
    }
}


for (let i = 0; i < 15; i++){
        
    randNumber = (Math.floor(Math.random() * 4))
    numberArray.push(randNumber)
}


function gameStart(){
        document.getElementById("display-msg").innerText = "Level " + level
        
        // for (let i in numberArray) {
        //     if i 
        // }
        
        
        
        setTimeout(function(id){
            document.getElementsByTagName("p")[0].style.color = "#cccccc";
        },3000);
        
        
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
            yellow.style.backgroundColor
            userInput.push("2")
        }


        let blue = document.getElementById("blue");
        blue.onclick = function(){
            blueSound.play()
            userInput.push("3")
            
        }
}








    // if (randNumber == 0){
    //     green.getElementById("green").click();
    // }else if (randNumber == 1){
    //     green.getElementById("red").click()
    // }
    
    

console.log(numberArray)



console.log("asij")
console.log(userInput)