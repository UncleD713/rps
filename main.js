var rock;
var paper;
var scissors;
var result;


const displayResult = document.getElementById('result');
const userChoice = document.getElementById('userchoice');
const possibleChoices = document.querySelectorAll('.choices');
const computerChoice = document.getElementById('computerchoice');

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    console.log(event.target.value);
  })
}

var rounds = prompt ("How many rounds of do you want to play?");
var roundNum = parseInt(rounds);

for (let i = 0; i < rounds; i++) {
  const playerChoice = prompt("Do you pick r, p, s?");
  var computerGame = ["rock", "paper", "scissors"]; 
 }

 var randomNumber = Math.floor(Math.random() * (3));
 var gameChoices = ["paper", "rock", "scissors"];
 
 
 
 randomNumber = Math.floor(Math.random() * 3);  
 if (randomNumber == 0) {
     alert(computerChoice  + "is rock");
  } else if (randomNumber == 1)  {
     alert(computerChoice  + "is paper");
  } else { (randomNumber  == 2) 
     alert(computerChoice  +  "is scissors"); 
 }
 
 console.log(randomNumber, computerChoice);
 
 
prompt (" User, do you choose r, p, or s?");

var userScore = 0;
var computerScore = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function declareWinner(userScore, computerScore) {
  if (userChoice  == computerChoice) {
    console.log("It's a draw!");
  } else if (computerChoice == "rock") {
  }  if (userChoice == "paper") {
    console.log("You win!");
    userScore++;
  }
  else {
    console.log("The computer wins!");
    computerScore++;
  } 
  if (computerChoice == "paper") {
    (userChoice == "scissors") 
    console.log("You win!");
    userScore++;
    } 
   else {
    console.log("The computer wins!"); 
    computerScore++;
  }
  
    { 
     if (userChoice == "rock") {
      console.log("You win!");
      userScore++;
    }
    else  {
      console.log("The computer wins!");
      computerScore++;
    }
  }
  
  }
  
  declareWinner(userScore, computerScore);
  
  console.log("User:  "  +  userScore);
  console.log("computer: "  + computerScore);
  