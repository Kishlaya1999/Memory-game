//TODO:Shuffling pictures array function
//TODO:Think about the logic for inserting pictures randomly two times
//TODO:Create moves and scores section
//TODO:Close privious two cards if third one is opened and increment the moves
let pictures =[];
const pictures4x4 = [
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png",
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png"
]         //array used when 4x4 level is selected
const pictures5x5 = [
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png",
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png",
     "./Images/git.png",
     "./Images/github.png",
     "./Images/vscode.png",
     "./Images/stackoverflow.png",
     "./Images/git.png",
     "./Images/github.png",
     "./Images/vscode.png",
     "./Images/stackoverflow.png"
     // "./Images/chrome.png",
     // "./Images/css-tricks.png",
     // "./Images/emmet.png",
     // "./Images/scss.png",
     // "./Images/Live Server.png",
     // "./Images/Youtube.png"
]         //array used when 5x5 level is selected
const pictures6x6 = [
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png",
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/css3.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/reactJS.png",
     "./Images/tailwind.png",
     "./Images/vuejs.png",
     "./Images/chrome.png",
     "./Images/css-tricks.png",
     "./Images/github.png",
     "./Images/emmet.png",
     "./Images/git.png",
     "./Images/scss.png",
     "./Images/Live Server.png",
     "./Images/stackoverflow.png",
     "./Images/vscode.png",
     "./Images/Youtube.png",
     "./Images/chrome.png",
     "./Images/css-tricks.png",
     "./Images/github.png",
     "./Images/emmet.png",
     "./Images/git.png",
     "./Images/scss.png",
     "./Images/Live Server.png",
     "./Images/stackoverflow.png",
     "./Images/vscode.png",
     "./Images/Youtube.png"
]         //array used when 6x6 level is selected

const gameContainer = document.getElementById("gameContainer");
const selectedLevel = document.getElementById("selectedLevel");
const setLevel = document.getElementById("setLevel");



document.addEventListener("DOMContentLoaded", function () {      //inserting the cards in page on loadig 
     shufflePictures(pictures4x4);
     for (let i = 0; i < 16; i++) {          //by default level is set to 4x4 so 16 cards are inserted in the page
          gameContainer.innerHTML +=
               `<div class="cardContainer">
                    <div class="front"><img src="./Images/brain.png" alt=""></div>
                    <div class="back"><img src="${pictures4x4[i]}" alt=""></div>
               </div>`
     }
     cardClick();
})

setLevel.addEventListener("click", function(e) {
     e.preventDefault();
     gameContainer.innerHTML = " "; // if we will not include it then cardContainerInsert will be added in the existing set of cards thats why we enpty it before inserting new card container
     let level = selectedLevel.value; //taking the value from dropdown list
     let row = level.slice(0, 1);  //slicing the number of rows from dropdown list
     let column = level.slice(2, 3);    //slicing the number of columns from dropdown list
     if(row == 4 && column == 4){pictures=pictures4x4}
     else if(row == 5 && column == 5){pictures=pictures5x5}
     else if(row == 6 && column == 6){pictures=pictures6x6}
     for (let j = 0; j < row * column; j++) {    //inserting the number of cards according to the level selected
          gameContainer.innerHTML +=
          `<div class="cardContainer">
               <div class="front"><img src="./Images/brain.png" alt=""></div>
               <div class="back"><img src="${pictures[j]}" alt=""></div>
          </div>`;
     }
     gameContainer.style.gridTemplateColumns = `repeat( ${column} ,1fr)`;  //changing the number of columns depending on the level selected in css grid
     gameContainer.style.gridTemplateRows = `repeat( ${row} ,1fr)`;   //changing the number of rows depending on the level selected in css grid
     cardClick();
});

//A function that adds event listner in all the element with cardContainer class
let cardClick = () => {       
     document.querySelectorAll(".cardContainer").forEach(function (card) {      //selecting all the elements with class 'cardContainer'
          card.addEventListener("click", function (e) {     //adding event listener in all the cards
               e.preventDefault();
               // console.log(this.style);
               let rotateCard = e.currentTarget;
               rotateCard.style.transform = "rotateY(180deg)";
               setTimeout(function () {
                    // console.log(rotateCard.style.transform)
                    rotateCard.style.transform = "rotateY(0deg)";
               }, 3000);
          })
     })
}

function shufflePictures(pictures) {
     pictures.sort(() => Math.random() - 0.5);
}