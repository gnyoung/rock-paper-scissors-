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
playerSelection = playerSelection.toLowerCase();
//console.log(playerSelection);

//create a function that plays a single round of the game by comparing user and computer choices
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "scissors"))
        return "You win! Rock beats scissors."
    
    if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You lose! Rock beats scissors."};

    if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You win! Scissors beats paper."};

    if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You lose! Scissors beats paper."};

    if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You win! Paper beats rock."};
    
    if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You lose! Paper beats rock."};
    
    if (playerSelection == null) {
        return "Please enter a value."};
    } 

console.log(playRound(playerSelection, computerSelection));

