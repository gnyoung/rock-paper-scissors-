//Create find elements with ids and store in variables to use with DOM methods
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
//define variable for array 
const rpsArray = ["rock", "paper", "scissors"];
// Set scores to zero
let playerScore = 0;
let computerScore = 0;
// create a function for the computer to randomly make a choice and store value in variable "computerSelection"
function getComputerChoice(array) {
    return array[Math.floor(Math.random()*array.length)];
}
let computerSelection = getComputerChoice(rpsArray); 

//create a function that plays a single round of the game by comparing user and computer choices
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = "You win! Rock beats scissors."; 
        results.appendChild(p);
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You lose! Rock beats scissors.";
        results.appendChild(p);
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = "You win! Scissors beats paper.";
        results.appendChild(p);
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You lose! Scissors beats paper.";
        results.appendChild(p);
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = "You win! Paper beats rock.";
        results.appendChild(p);
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You lose! Paper beats rock.";
        results.appendChild(p);
    } else if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        results.appendChild(p);
    } else {
        const p = document.createElement('p');
        p.innerText = "Enter correct value.";
        results.appendChild(p);
    }
} 

//Create an eventListner that runs the playRound function when a user clicks a button 
rock.addEventListener('click', () => {
    playRound("rock", computerSelection);
    checkForWinner(playerScore, computerScore);
});
paper.addEventListener('click', () => {
    playRound("paper", computerSelection);
    checkForWinner(playerScore, computerScore);
});
scissors.addEventListener('click', () => {
    playRound("scissors", computerSelection);
    checkForWinner(playerScore, computerScore);
});


function checkForWinner(playerScore, computerScore) {
  if (playerScore == 5) {
    const p = document.createElement('p');
    p.innerHTML = "<strong>Congrats, you win the game!</strong>";
    results.appendChild(p);
    
  }
  else if (computerScore == 5) {
    const p = document.createElement('p');
    p.innerHTML = "<strong>Sorry, you lose the game!</strong>";
    results.appendChild(p);
  }
}

