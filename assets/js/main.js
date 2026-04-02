// main.js

console.log("Hello, World!");


let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {

    console.log(divs.length, "randomize!")

    //this affects the whole grid
    grid[0].style.transform = `rotate(${Math.random() * 360}deg)`;

    //just affects grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        //50% of time...
        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${
            translateX}%, ${translateY}%) rotate(${rotate}deg)`;
        

    }) 


}

//telling the browser to wait for click'
document.addEventListener("click", randomize);
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; } 
// this function generates a random number between min and max

