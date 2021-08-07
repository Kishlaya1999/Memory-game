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

let gameContainer = document.getElementById("gameContainer");

document.addEventListener("DOMContentLoaded", function () {
     for (let i = 0; i < 16; i++) {
          gameContainer.innerHTML +=
               `<div class="cardContainer">
                    <div class="front"><img src="./Images/brain.png" alt=""></div>
                    <div class="back"><img src="${pictures[i]}" alt=""></div>
               </div>`
     }

     document.querySelectorAll(".cardContainer").forEach(function (card) {
          card.addEventListener("click", function (e) {
               console.log(this.childNodes);
               let rotateCard = e.currentTarget;
               rotateCard.style.transform = "rotateY(180deg)";
               setTimeout(function () {
                    // console.log(rotateCard.style.transform)
                    rotateCard.style.transform = "rotateY(0deg)";
               }, 3000);
          });
     });
})