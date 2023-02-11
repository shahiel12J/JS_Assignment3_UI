const choice = ["ROCK", "PAPER", "SCISSORS"];
const labelResult = document.createElement("strong");
const labelCscore = document.createElement("label");
const labelPscore = document.createElement("label");

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const label = document.querySelector('.label')
const section = document.querySelector('#section')

let playerSelect = ''
let result = '';
let playerScore = 0;
let computerScore = 0;
let score = 0;

labelResult.setAttribute("class","result")
labelCscore.setAttribute("class","score");
labelPscore.setAttribute("class","score")

rock.addEventListener('click', () => {
    if(playerScore < 5 && computerScore < 5){
        playerSelect = "ROCK";
        game();
    }
})

paper.addEventListener('click', () => {
    if(playerScore < 5 && computerScore < 5){
        playerSelect = "PAPER";
        game();
    }
})

scissors.addEventListener('click', () => {
    if(playerScore < 5 && computerScore < 5){
        playerSelect = "SCISSORS";
        game();
    }
})

function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelect,computerSelect){

    if(playerSelect === computerSelect){

    }
    else if(playerSelect == 'ROCK'){
        if(computerSelect == 'PAPER'){
            score = computerScore++;
        }else{
            score = playerScore++;
        }
    }
    else if(playerSelect == 'PAPER'){
        if(computerSelect == 'SCISSORS'){
            score = computerScore++;
        }else{
            score = playerScore++;
        }
    }
    else if(playerSelect == 'SCISSORS'){
        if(computerSelect == 'ROCK'){
            score = computerScore++;
        }else{
            score = playerScore++;
        }
    }
}


function game(){
    const computerSelect = computerPlay();
    playRound(playerSelect,computerSelect);

    labelCscore.innerText = "Computer Score:" + computerScore;
    section.appendChild(labelCscore);
    
    labelPscore.innerText = "Your Score:" + playerScore;
    section.appendChild(labelPscore);
        
    if(playerScore == 5){
        labelResult.innerText = "You Win";
        label.appendChild(labelResult);
    }else 
    if(computerScore == 5){
        labelResult.innerText = "You Lose";
        label.appendChild(labelResult);
    }else 
    if(playerScore == 5 && computerScore == 5){
        labelResult.innerText = "Draw";
        label.appendChild(labelResult);
    }
}



