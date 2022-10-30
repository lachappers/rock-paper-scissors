// create choices = rock, paper or scissors
// rules = rock > scissors, scissors > paper, paper > rock
// create variable computerChoice(), string, with value from getComputerChoice()
    //create function getComputerChoice() 
        // return computerChoice = randomly assigned value from choices list
// create variable playerSelection(), string, initial value ""
// ask the user "Rock, paper or scissors?", validate response and store in playerSelection()
// create function playRound()
// compare choices, return result to playerScore(), display message
// if playerScore 





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