
// create choices = rock, paper or scissors
const choices = ["Rock", "Paper", "Scissors"];

// set starting scores
let computerScore = 0;
let playerScore = 0;

// welcome message
let welcomeMessage = "Welcome to the game! Round 1:"
    console.log(welcomeMessage);

// ask player for choice
let playerSelection = "scissoRs";
    playerSelection = playerSelection.toLowerCase();
// print player choice in console
console.log(`Your choice: ${playerSelection.toUpperCase()}`);


// generate computer choice
    //create function getComputerChoice() which returns randomly assigned value from choices list
function getComputerChoice(){
        //get random index value
    let randomIndex = Math.floor(Math.random() * choices.length);
        //get random item
    return computerSelection = (choices[randomIndex]).toLowerCase();
}


// create function playRound()
function playRound(playerSelection){
// set computer choice for this round    
    let computerSelection = getComputerChoice();
// send message to console   
    console.log(`Computer choice: ${computerSelection.toUpperCase()}`); 
// play round       
   if (playerSelection === computerSelection) {
        result = "It's a draw!";
    }
    // rules = rock > scissors, scissors > paper, paper > rock
    else if ( (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        result = playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "! You win!"
    }
    else {
        result = computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "! You lose!"
    }
       
   return result; 
}
// print result to console
console.log(playRound(playerSelection));


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    //let result = "";
    for (let i = 0; i < 5; i++){
        //result += "Round " + i + "result: ";
        let a = i+1
        result = `Round ${a}: ${playRound(playerSelection)}`;
        console.log(result);
        }
}

console.log(game());



// ************* Cut content ***********

 // create variable playerSelection(), string, initial value ""
        // ask the user "Rock, paper or scissors?", validate response and store in playerSelection()



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