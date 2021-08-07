const pictures = [
     "./Images/AngularJS.png",
     "./Images/bootstrap.png",
     "./Images/chrome.png",
     "./Images/css3.png",
     "./Images/css-tricks.png",
     "./Images/emmet.png",
     "./Images/git.png",
     "./Images/github.png",
     "./Images/html.png",
     "./Images/javaScript.png",
     "./Images/Live Server.png",
     "./Images/reactJS.png",
     "./Images/scss.png",
     "./Images/stackoverflow.png",
     "./Images/tailwind.png",
     "./Images/vscode.png",
     "./Images/vuejs.png",
     "./Images/Youtube.png",
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
})