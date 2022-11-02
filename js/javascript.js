
// create choices = rock, paper or scissors
const choices = ["Rock", "Paper", "Scissors"];

// set starting scores
//let computerScore = 0;
//let playerScore = 0;
// change to array
const scores = [0,0];

const message = document.querySelector('#message');
    const welcomeMessage = document.createElement('div');
        welcomeMessage.textContent = "Welcome to the game!";
        message.appendChild(welcomeMessage);
        //console.log(welcomeMessage);
    
    const picks = document.querySelector('#currentSelection'); {
        const playerPick = document.createElement('div');
        playerPick.textContent = `Take your pick!`;
        picks.appendChild(playerPick); 
    }


const results = document.querySelector('#results'); {
    const playerScore = document.createElement('div');
    playerScore.textContent = scores[0];
    results.appendChild(playerScore);

    const computerScore = document.createElement('div');
    computerScore.textContent = scores[1];
    results.appendChild(computerScore);

};



// generate computer choice
    //create function getComputerChoice() which returns randomly assigned value from choices list
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * choices.length);         //get random index value
    return computerSelection = (choices[randomIndex]).toLowerCase();        //get random item
}


// create function playRound()
function playRound(){
    // ask player for choice
    //let playerSelection = window.prompt("Rock, Paper or Scissors?");
    //playerSelection = playerSelection.toLowerCase();
    const btns = document.querySelectorAll('#btn');
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                return playerSelection = (btn.innerHTML).toLowerCase;
            });
        });

    //playerPick.replaceWith(`Your choice: ${playerSelection.toUpperCase()}`);
     //   picks.appendChild(playerPick); 
    

    //console.log(`Your choice: ${playerSelection.toUpperCase}`); // print player choice in console
   
    let computerSelection = getComputerChoice(); // set computer choice for this round 
  
    console.log(`Computer choice: ${computerSelection.toUpperCase()}`); // send message to console 
      
   if (playerSelection === computerSelection) {
        let result = "It's a draw!";
        let winner = "draw";
    }// play round 
    
    else if ( (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        result = `${playerSelection.toUpperCase} beats ${computerSelection.toUpperCase()}! You win!`
        winner = "player";
    }
    else {
        result = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase}! You lose!`
        winner = "computer";
    } // rules = rock > scissors, scissors > paper, paper > rock      

    return result; 

    const results = document.querySelector('#results'); {    
        const roundResult = document.createElement('div');
        roundResult.textContent = result;
        results.appendChild(result);
    };
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
//const currentResult = 

    console.log(game(2));

   // let finalScore = `Final Score: Player: ${scores[0]}, Computer: ${scores[1]}`
   // console.log(finalScore);


