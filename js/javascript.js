

// function getComputerChoice() {

//     const symbol = ["rock", "paper", "scissors"];

//     return symbol[Math.floor(Math.random() * 3)];

// }

// function playRound(playerSelection, computerSelection) {
//     // playerSelection=playerSelection.toLowerCase();

//     if (playerSelection == computerSelection) {
//         console.log(`game ties. Both of you play ${playerSelection}`);
//     }
//     else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
//         (playerSelection == 'paper' && computerSelection == 'scissors') ||
//         (playerSelection == 'scissors' && computerSelection == 'rock')) {
//         console.log(`You win! ${playerSelection} beats ${computerSelection}`);
//     }
//     else {
//         console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
//     }
// }

// function game() {

//     let playerSelection;

//     for (let i = 0; i < 5; i++) {

//         console.log(`Round ${i+1}`);

//         playerSelection = prompt("what's your selection?").toLowerCase();

//         const symbol = ["rock", "paper", "scissors"];

//         while (symbol.every((value) => value != playerSelection)) {
//             playerSelection = prompt("Wrong input! Re-input your selection?");
//         }

//         playRound(playerSelection,getComputerChoice());

//     }
// }

// game();

const options = document.querySelectorAll('img.option');
const message = document.querySelector('div.message p');
const comScore=document.querySelector('.com-status p.score');
const boyScore=document.querySelector('.boy-status p.score');

resetAll();


function resetRound() {

    const choices = document.querySelectorAll('img.choice');
    choices.forEach((choice) => {
        choice.setAttribute('src', 'img/questionMark.png');
    })

    message.textContent = "What's your choice?";

    options.forEach((option) => {

        option.style.opacity=1; 
        option.addEventListener('click', playerSelect, { once: true });
    });

}

function resetAll(){

    comScore.textContent='0';
    boyScore.textContent='0';

    resetRound();
}


function playerSelect(e) {

    e.stopPropagation();

    const boySelection = document.querySelector("div.boy-selection img");
    const boyChoice = e.target.getAttribute('data-key');
    // const boySelectionImgSource = e.target.getAttribute('src');
    boySelection.setAttribute('src', `img/${boyChoice}.png`);


    const comSelection = document.querySelector('div.com-selection img');
    const comChoice = getComSelection();
    comSelection.setAttribute('src', `img/${comChoice}.png`);



    const result=playRound(boyChoice,comChoice);


    
    message.textContent=result[1];

    if (result[0]==1){
        boyScore.textContent=parseInt(boyScore.textContent)+1;
    }else if (result[0]==-1){
        comScore.textContent=parseInt(comScore.textContent)+1;
    }

    options.forEach((option) => {

        option.style.opacity=0; 
        option.removeEventListener('click', playerSelect);
    });

    const body = document.querySelector('body');

    if (boyScore.textContent=='5'){
        message.textContent='Congutulations! You got the final win!';
        body.addEventListener('click', resetAll, { once: true });
    }
    else if (comScore.textContent=='5'){
        message.textContent='Computer got the final win...Try it again.';
        body.addEventListener('click', resetAll, { once: true });
    }else{

        body.addEventListener('click', resetRound, { once: true });
    }

}

function getComSelection() {
    const symbol = ['rock', 'paper', 'scissors'];
    return symbol[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    // playerSelection=playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return [0, `game ties. Both of you play ${playerSelection}`];
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return [1, `You win! ${playerSelection} beats ${computerSelection}`];
    }
    else {
        return [-1, `You lose! ${computerSelection} beats ${playerSelection}`];
    }
}