
// create choices = rock, paper or scissors
const choices = ["Rock", "Paper", "Scissors"];


// welcome message
let welcomeMessage = "Welcome to the game! Round 1:"
    console.log(welcomeMessage);

// simultaneously ask player for choice
let playerSelection = "scissoRs";
    playerSelection = playerSelection.toLowerCase();
let playerScore = 0;

console.log(`Your choice: ${playerSelection}`);


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

// set computer choice for this round
const computerChoice1 = getComputerChoice();
// send message to console
console.log(`Computer choice: ${computerChoice1}`);
//const computerChoice2 = "Computer Choice 2: " + getComputerChoice();
//console.log(computerChoice1, computerChoice2)


    // create variable playerSelection(), string, initial value ""
        // ask the user "Rock, paper or scissors?", validate response and store in playerSelection()

// create function playRound()
function playRound(playerSelection,computerChoice1){
   if (playerSelection === computerChoice1) {
        result = "It's a draw!";
    }
    // rules = rock > scissors, scissors > paper, paper > rock
    else if ( (playerSelection == "scissors" && computerChoice1 == "paper") || (playerSelection == "paper" && computerChoice1 == "rock") || (playerSelection == "rock" && computerChoice1== "scissors")) {
        result = playerSelection.toUpperCase() + " beats " + computerChoice1.toUpperCase() + "! You win!"
    }
    else {
        result = computerChoice1.toUpperCase() + " beats " + playerSelection.toUpperCase() + "! You lose!"
    }
       
   return result; 
}
console.log(playRound(playerSelection,computerChoice1));
 





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