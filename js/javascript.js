
// create choices = rock, paper or scissors
const choices = ["Rock", "Paper", "Scissors"];

// set starting scores
//let computerScore = 0;
//let playerScore = 0;
// change to array
const scores = [0,0];

// welcome message
let welcomeMessage = "Welcome to the game!"
    console.log(welcomeMessage);



// generate computer choice
    //create function getComputerChoice() which returns randomly assigned value from choices list
function getComputerChoice(){
        //get random index value
    let randomIndex = Math.floor(Math.random() * choices.length);
        //get random item
    return computerSelection = (choices[randomIndex]).toLowerCase();
}


// create function playRound()
function playRound(){
    // ask player for choice
    let playerSelection = window.prompt("Rock, Paper or Scissors?");
         playerSelection = playerSelection.toLowerCase();
    // print player choice in console
    console.log(`Your choice: ${playerSelection.toUpperCase()}`);
// set computer choice for this round    
    let computerSelection = getComputerChoice();
// send message to console   
    console.log(`Computer choice: ${computerSelection.toUpperCase()}`); 
// play round       
   if (playerSelection === computerSelection) {
        result = "It's a draw!";
        winner = "draw";
    }
    // rules = rock > scissors, scissors > paper, paper > rock
    else if ( (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        result = playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "! You win!"
        winner = "player";
    }
    else {
        result = computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "! You lose!"
        winner = "computer";
    }       
   return result; 
}

// print final result to console
// console.log(playRound(playerSelection));



// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game(rounds) {
    let endResult = "";
    for (let i = 0; i < rounds; i++){
        // run rounds
        let a = i+1
        result = `Round ${a}: ${playRound()}`;

        // track score
            if (winner == "player") {
                scores[0] += 1
            }
            else if (winner == "computer"){
                scores [1] +=1
            }
            let currentResult = `Player: ${scores[0]}: Computer: ${scores[1]}`;
        console.log(result);
        console.log(currentResult);
        endResult = currentResult;
        };
    
    return `Final score: ${endResult}`;
}

    //console.log(game(2));

   // let finalScore = `Final Score: Player: ${scores[0]}, Computer: ${scores[1]}`
   // console.log(finalScore);


const btns = document.querySelectorAll('#btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log(btn.innerHTML);
        });
    });


    //console.log(btns);