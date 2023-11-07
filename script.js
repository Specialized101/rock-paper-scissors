
function getComputerChoice() {
    return choices[getRandomInt(3)];

}

function getRandomInt(max) {
    let randomInt = Math.floor(Math.random() * max);
    return randomInt;
}

function playRound(playerSelection, computerSelection) {

    let userChoice = playerSelection.trim().toUpperCase();

    switch (userChoice) {
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

function displayResults(results, playerPoints, computerPoints) {

    results.textContent = `Current Score: [Player] ${playerPoints} - ${computerPoints} [Computer]`;

    if (playerPoints === MAX_SCORE)
        results.textContent += '\nCongratulations! You won!';
    else if (computerPoints === MAX_SCORE)
        results.textContent += '\nToo baaaad! You lost.';
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let roundResult;

    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    const container = document.createElement('div');
    const results = document.createElement('div');

    container.setAttribute('id', 'main-container');
    results.setAttribute('id', 'results');

    rockBtn.textContent = choices[0];
    paperBtn.textContent = choices[1];
    scissorsBtn.textContent = choices[2];
    
    displayResults(results, playerPoints, computerPoints);

    document.body.appendChild(container);
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
    container.appendChild(results);

    rockBtn.addEventListener('click', () => {
        roundResult = playRound(choices[0], getComputerChoice());
        if (roundResult.charAt(0) === 'W')
            playerPoints++;
        else if (roundResult.charAt(0) === 'L')
            computerPoints++;

        displayResults(results, playerPoints, computerPoints);
    });
    paperBtn.addEventListener('click', () => {
        roundResult = playRound(choices[1], getComputerChoice());
        if (roundResult.charAt(0) === 'W')
            playerPoints++;
        else if (roundResult.charAt(0) === 'L')
            computerPoints++;

        displayResults(results, playerPoints, computerPoints);
    });
    scissorsBtn.addEventListener('click', () => {
        roundResult = playRound(choices[2], getComputerChoice());
        if (roundResult.charAt(0) === 'W')
            playerPoints++;
        else if (roundResult.charAt(0) === 'L')
            computerPoints++;

        displayResults(results, playerPoints, computerPoints);
    });


}

const choices = ["ROCK", "PAPER", "SCISSORS"];
const MAX_SCORE = 5;
game();