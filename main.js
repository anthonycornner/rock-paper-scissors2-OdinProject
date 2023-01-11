/*
*Create a function called getComputerChoice that tells the computer to randomly spit out a value of either "Rock", "Paper", or "Scissors"
*Create a function that plays a single round of Rock Paper Scissors, this function takes two params: "playerSelection" and "computerSelection" and RETURNS a string that declares the winner like so: "You Lose! Paper beats Rock!"
*Make sure the playerSelection func is case-insensitive so users can input any type of capitalization of the different selections
*Write a new function called game()
*call playRound() function inside of game() to play a 5 round game that keeps score and reports a winner or loser at the end
*feel free to create helper functions if you think it would be useful
*/

//Initialize arr to pull rock paper scissors randomly from it
let rpsArr = ["Rock", "Paper", "Scissors"];

//Initialize a value to hold the randomly selected rpsArr value

let randomChoice = "";

//write a function that when called it returns a random index of the array in string format
let getComputerChoice = () => {
    randomChoice = rpsArr[Math.floor(Math.random()*rpsArr.length)];
    randomChoice = randomChoice.toString();
    return randomChoice;
}
/*
*get playerSelection from user input prompt, turn it into all lowercase
*/

let correctCaseMe = (rpsUserText) => {
    let correctedText = rpsUserText.toLowerCase();correctedText = correctedText.charAt(0).toUpperCase() + correctedText.slice(1);
    return correctedText;
}

let pSelectionVal = () => {
    let userText = prompt("Enter 'Rock', 'Paper', or 'Scissors' to get started: "); 
    let updatedUserText = correctCaseMe(userText);

    if(updatedUserText == "Rock" || updatedUserText == "Paper" || updatedUserText == "Scissors"){
        return updatedUserText;
    }else{
        pSelectionVal();  
    }
    
}
//write a function that tests the value of the first parameter against the second parameter and console.log("Some text here discerning the winner")

/*
*set up conditionals to discern what symbol beats what
grab the value of computerSelection from getComputerChoice
*compare the values of playerSelection and computerSelection against the declared conditionals
*depending on outcome of true or false, print "You win, pS beats cS", or "You lose, cS beats pS"
*/

let playRound = (playerSelection, computerSelection) => {

    pSelectionVal();

    if (playerSelection == "Rock"){
        if(computerSelection == "Rock"){
            console.log("It's a tie, " + playerSelection + " matches " + computerSelection + ".")
        }
        if (computerSelection == "Paper"){
            console.log("You lose, " + computerSelection + " covers " + playerSelection + ".")
        }
        if (computerSelection == "Scissors"){
            console.log("You win, " + playerSelection + " beats " + computerSelection + ".")
        }
    }else if (playerSelection == "Paper") {
        if(computerSelection == "Rock"){
            console.log("You win, " + playerSelection + " covers " + computerSelection + ".")
        }
        if (computerSelection == "Paper"){
            console.log("It's a tie, " + computerSelection + " matches " + playerSelection + ".")
        }
        if (computerSelection == "Scissors"){
            console.log("You lose, " + computerSelection + " beats " + playerSelection + ".")
        }
    }else if (playerSelection == "Scissors") {
        if(computerSelection == "Rock"){
            console.log("You lose, " + computerSelection + " beats " + playerSelection + ".")
        }
        if (computerSelection == "Paper"){
            console.log("You win, " + playerSelection + " beats " + playerSelection + ".")
        }
        if (computerSelection == "Scissors"){
            console.log("It's a tie, " + playerSelection + " matches " + computerSelection + ".")
        }
    }

}

const playerSelection = pSelectionVal();
const computerSelection = getComputerChoice();

let game = (rounds) => {

    for (let i = 0; i <= rounds; i++){
        
        playRound(playerSelection, computerSelection);
    }
}

game(5);
