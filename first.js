const choices = ["rock", "paper", "scissor"];
const computerdisplay = document.getElementById("computerdisplay");
const playerdisplay = document.getElementById("playerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const button = document.querySelector(".btn");
const playerscore=document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
let playerscores=0;
let computerscores=0;
function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";
  if (playerchoice === computerchoice) {
    result = "ITS A TIE ";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "scissor" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerchoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissor":
        result = computerchoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }

    playerdisplay.textContent = `Player:${playerchoice}`;
    computerdisplay.textContent = `Computer:${computerchoice}`;
    resultdisplay.textContent = result;
    resultdisplay.classList.remove("redtext", "greentext");
    switch (result) {
      case "YOU WIN":
        resultdisplay.classList.add("greentext");
        playerscores++
        playerscore.textContent=playerscores
        break;
      case "YOU LOSE":
        resultdisplay.classList.add("redtext");
          computerscores++
        computerscore.textContent=computerscores;
        break;
    }
    button.addEventListener("click", () => {
      resultdisplay.textContent = "";
      (resultdisplay.classList.remove = "greentext"), "redtext";
      playerdisplay.textContent = "Player:";

    });
  };
};
