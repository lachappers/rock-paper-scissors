
// create choices = rock, paper or scissors
const choices = ["Rock", "Paper", "Scissors"];
// rules = rock > scissors, scissors > paper, paper > rock

// generate computer choice
    // create variable computerChoice(), string, with value from getComputerChoice()
let computerScore = 0;
//console.log(computerChoice);
    //create function getComputerChoice() 
            // return computerChoice = randomly assigned value from choices list
function getComputerChoice(){
    //get random index value
    let randomIndex = Math.floor(Math.random() * choices.length);
    //get random item
    return computerChoice = (choices[randomIndex]).toLowerCase();
}
console.log(getComputerChoice());



const computerChoice1 = "Computer Choice 1: " + getComputerChoice();
const computerChoice2 = "Computer Choice 2: " + getComputerChoice();
console.log(computerChoice1, computerChoice2)

// simultaneously ask player for choice
let playerSelection = "scissoRs";
    playerSelection = playerSelection.toLowerCase();
let playerScore = 0;

console.log(playerSelection);
    // create variable playerSelection(), string, initial value ""
        // ask the user "Rock, paper or scissors?", validate response and store in playerSelection()
// welcome message
let welcomeMessage = "Welcome to the game"
    console.log(welcomeMessage);
// create function playRound()
function playRound(playerSelection,getComputerChoice){
   if (playerSelection === getComputerChoice()) {
        result = "It's a draw!";
    }
    else {
       result = "game on!" 
    } 
   return result; 
}
console.log(playRound(playerSelection,getComputerChoice));
// compare choices, return result to playerScore(), display message
 





/*
        // game logic

        
        //List of moves for choices
        const choices = ["Rock", "Paper", "Scissors"];
       
        
        // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play
       function getComputerChoice(){
            //get random index value
            let randomIndex = Math.floor(Math.random() * choices.length);
            //get random item
            const computerChoice = choices[randomIndex];
            return computerChoice;
       }
       console.log(getComputerChoice());

       //get player choice
        let playerSelection = 'Rock';
       //make player choice all lower case
        playerSelection = playerSelection.toLowerCase();
       //play round
       
       function playRound(playerSelection,computerChoice){
            // compare playerSeletion and computerChoice
            // it's a draw
            if(playerSelection === computerChoice) {
                result.textContent = "It's a draw! Play again?";
            } else
            // set outcome rules
                if (playerSelection == 'rock'){
                        if (computerChoice == 'paper') {
                                result.textContent = "You lose! Paper beats rock!"
                        } else {
                            result.textContent = "You win! How surprising!"
                        }
            } else
                if (playerSelection == 'scissors'){
                        if (computerChoice == 'rock') {
                            result.textContent = "You lose! Rock beats scissors!"
                        } else {
                            result.textContent = "You win! How surprising!"
                        }
            } else
                if (playerSelection == 'paper'){
                        if (computerChoice == 'scissors') {
                            result.textContent = "You lose! Scissors beat paper!"
                        } else {
                            result.textContent = "You win! How surprising!"
                        }                
            }
            return result.textContent
        }
        console.log(playRound(playerSelection,computerChoice));
        */