const pictures = [
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
     "./Images/Youtube.png"
]

const gameContainer = document.getElementById("gameContainer");
const selectedLevel = document.getElementById("selectedLevel");
const setLevel = document.getElementById("setLevel");

document.addEventListener("DOMContentLoaded", function () {
     setLevel.addEventListener("click", function (e) {
          e.preventDefault();
          gameContainer.innerHTML = " "; // if we will not include it then cardContainerInsert will be added in the existing set of cards thats why we enpty it before inserting new card container
          let level = selectedLevel.value;
          let row = level.slice(0, 1);
          let column = level.slice(2, 3);
          for (let j = 1; j <= row * column; j++) {
               gameContainer.innerHTML +=
                    `<div class="cardContainer">
                    <div class="front"><img src="./Images/brain.png" alt=""></div>
                    <div class="back"><img src="${pictures[j]}" alt=""></div>
                    </div>`;
          }
          gameContainer.style.gridTemplateColumns = `repeat( ${column} ,1fr)`;
          gameContainer.style.gridTemplateRows = `repeat( ${row} ,1fr)`;
          cardClick();
     });

     for (let i = 0; i < 16; i++) {
          gameContainer.innerHTML +=
               `<div class="cardContainer">
                    <div class="front"><img src="./Images/brain.png" alt=""></div>
                    <div class="back"><img src="${pictures[i]}" alt=""></div>
               </div>`
     }

     cardClick();
})

function cardClick() {
     document.querySelectorAll(".cardContainer").forEach(function (card) {
          card.addEventListener("click", function (e) {
               e.preventDefault();
               console.log(this.childNodes);
               let rotateCard = e.currentTarget;
               rotateCard.style.transform = "rotateY(180deg)";
               setTimeout(function () {
                    // console.log(rotateCard.style.transform)
                    rotateCard.style.transform = "rotateY(0deg)";
               }, 3000);
          })
     })
}