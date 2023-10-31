
function getComputerChoice(){
    return choices[getRandomInt(3)];

}

function getRandomInt(max){
    let randomInt = Math.floor(Math.random() * max);
    return randomInt;
}

function playRound(playerSelection, computerSelection){

    let userChoice = playerSelection.trim().toUpperCase();

    switch (userChoice){
        case computerSelection:
            return `TIE! You both picked ${computerSelection} `;

        case "ROCK":
            if (computerSelection === "PAPER")
                return `LOOSER! ${userChoice} loses against ${computerSelection}`;
            if (computerSelection === "SCISSORS")
                return `WINNER! ${userChoice} beats ${computerSelection}`;

        case "PAPER":
            if (computerSelection === "SCISSORS")
                return `LOOSER! ${userChoice} loses against ${computerSelection}`;
            if (computerSelection === "ROCK")
                return `WINNER! ${userChoice} beats ${computerSelection}`;

        case "SCISSORS":
            if (computerSelection === "ROCK")
                return `LOOSER! ${userChoice} loses against ${computerSelection}`;
            if (computerSelection === "PAPER")
                return `WINNER! ${userChoice} beats ${computerSelection}`;
    }
}

function game(){
    let playerPoints = 0; 
    let computerPoints = 0;
    

    for (let i = 1; i < 6; i++){
        console.log(`[ROUND ${i}] Current Score: [Player] ${playerPoints} - ${computerPoints} [Computer]`);

        let playerSelection = prompt("Choose between rock, paper or scissors: ");
        let roundResult = playRound(playerSelection, getComputerChoice()); 
        if (roundResult.charAt(0) === "L"){
            console.log(roundResult);
            computerPoints++;
        }
        else if (roundResult.charAt(0) === "W"){
            console.log(roundResult);
            playerPoints++;
        }
        else
            console.log(roundResult);
    }

    if (playerPoints > computerPoints)
        console.log(`Congratulations! You won ${playerPoints}-${computerPoints}!`);
    else if (playerPoints < computerPoints)
        console.log(`Too baaaad! You lost ${playerPoints}-${computerPoints}!`);
    else
        console.log(`It's a tie! Final score is ${playerPoints}-${computerPoints} in the BO5`);
}

const choices = ["ROCK", "PAPER", "SCISSORS"];

game();