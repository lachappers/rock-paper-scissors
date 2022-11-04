
const choices = ["Rock", "Paper", "Scissors"];
// set starting values
const scores = [0,0]; 
let computerSelection;
let playerSelection;
let winner;
let playerScore;
let computerScore;
let i = 0;
let winningScore = 2;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {    
        i +=1;
            const playerPick = document.querySelector('#playerPick');
            playerPick.textContent = `You picked: ${button.innerHTML}`;
            playerSelection = ((button.innerHTML).toLowerCase());
        computerSelection = getComputerChoice();
            const computerPick = document.querySelector('#computerPick');
            computerPick.textContent = `Computer picked: ${computerSelection} `;
        playRound (playerSelection, computerSelection);
            const winnerMessage = document.querySelector(`#winnerMessage`)
            winnerMessage.textContent = `Round ${i} winner: ${winner}`;
        if(scores[0] === winningScore || scores[1] === winningScore){
            const finalWinner = document.querySelector('#finalWinner');
            const finalWinnerMessage = scores[0] === winningScore
            ? `After round ${i}, YOU'RE THE WINNER!!`
            : `After round ${i}, COMPUTER WINS! YOU LOSE!`;
            finalWinner.textContent = finalWinnerMessage;
            //alert(`GAME OVER ${finalWinnerMessage}`)
        }
    });
}); 

function getComputerChoice(){ 
    let randomIndex = Math.floor(Math.random() * choices.length);
    return computerSelection = (choices[randomIndex]).toLowerCase();
}    

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection) {
            result = "It's a draw!";
            winner = "draw";
    }  
    else if ( 
        (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
            result = `${playerSelection} beats ${computerSelection}! You win!`
            winner = "player";
    }
    else {
            result = `${computerSelection} beats ${playerSelection}! You lose!`
            winner = "computer";
    };    
    //console.log(result);
    const resultMessage = document.querySelector('#resultMessage');
        resultMessage.textContent = `${result}`;
    settingScores(winner);
    return winner;
};


function settingScores(winner){
    if (winner == "player") { scores[0] += 1} // track score
    else if (winner == "computer"){scores [1] +=1};
    //let currentResult = `Player: ${scores[0]}: Computer: ${scores[1]}`;
    updateScores(scores);
};

function updateScores(scores){
    playerScore = document.querySelector('#playerScore');
        playerScore.textContent = scores[0];
    
    computerScore = document.querySelector('#computerScore');
        computerScore.textContent = scores[1];
}