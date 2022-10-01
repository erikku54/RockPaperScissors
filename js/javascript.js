

function getComputerChoice() {

    const symbol = ["rock", "paper", "scissors"];

    return symbol[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection) {
    // playerSelection=playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log(`game ties. Both of you play ${playerSelection}`);
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {

    let playerSelection;

    for (let i = 0; i < 5; i++) {

        console.log(`Round ${i+1}`);

        playerSelection = prompt("what's your selection?").toLowerCase();

        const symbol = ["rock", "paper", "scissors"];

        while (symbol.every((value) => value != playerSelection)) {
            playerSelection = prompt("Wrong input! Re-input your selection?");
        }

        playRound(playerSelection,getComputerChoice());

    }
}

game();


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));