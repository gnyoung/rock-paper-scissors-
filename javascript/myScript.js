// create a function for the computer to randomly make a choice and return that value

function getComputerChoice (selections) {
    return selections[Math.floor(Math.random()*selections.length)];
}
const selections = ["rock", "paper", "scissors"];
console.log(getComputerChoice(selections));
