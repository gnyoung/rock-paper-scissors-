//define variable for array 
let array = ["rock", "paper", "scissors"];

// create a function for the computer to randomly make a choice and store value in variable "computerSelection"
function getComputerChoice(array) {
    return array[Math.floor(Math.random()*array.length)];
}
computerSelection = getComputerChoice(array);
//console.log(computerSelection);

//prompt user to input value and convert value to lower case 
let playerSelection = prompt("Choose rock, paper, or scissors:");
if (playerSelection != null) {
 playerSelection.toLowerCase();
}
//console.log(playerSelection);

//create a function that plays a single round of the game by comparing user and computer choices
function playRound(playerSelectionParameter, computerSelectionParameter) {
    if ((playerSelectionParameter == "rock") && (computerSelectionParameter == "scissors")) {
        return "You win! Rock beats scissors."; 
    } else if ((playerSelectionParameter == "scissors") && (computerSelectionParameter == "rock")) {
        return "You lose! Rock beats scissors."; 
    } else if ((playerSelectionParameter == "scissors") && (computerSelectionParameter == "paper")) {
        return "You win! Scissors beats paper.";
    } else if ((playerSelectionParameter == "paper") && (computerSelectionParameter == "scissors")) {
        return "You lose! Scissors beats paper.";
    } else if ((playerSelectionParameter == "paper") && (computerSelectionParameter == "rock")) {
        return "You win! Paper beats rock.";
    } else if ((playerSelectionParameter == "rock") && (computerSelectionParameter == "paper")) {
        return "You lose! Paper beats rock.";
    } else if (playerSelectionParameter == null) {
        return "Please enter a value.";
    } else {
        return "Enter correct value."}
    } 

//add line to function for an input that is not rock, paper or scissors 

//console.log(playRound(playerSelection, computerSelection));

//Create function that loops through five rounds
 function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "You win! Rock beats scissors." || roundResult == "You win! Scissors beats paper." || roundResult == "You win! Paper beats rock.") {
            ++playerScore;
        } else if (roundResult == "You lose! Rock beats scissors." || roundResult == "You lose! Scissors beats paper." || roundResult == "You lose! Paper beats rock."){
            ++computerScore;
        } }
    
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose."; 
    } else { 
        return "It's a tie!";
    } 
}

console.log(game()); 


