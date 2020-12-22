let choicePannel = document.querySelector('.choice-pannel');
let playPannel = document.querySelector('.play-pannel');
let playerBox = document.querySelectorAll('.player-box');
let scoreNumber = document.querySelector('#score-number');
let resultTxt = document.querySelector('.result-txt');
let againBox = document.querySelector('.again-box');
let rules = document.querySelector('.rules');
let menuOpacity = document.querySelector('.menu-opacity');
let iconClose = document.querySelector('#icon-close');

console.log(scoreNumber.innerHTML);

if (sessionStorage.getItem("scoreNumber") >= 1) {
    scoreNumber.innerHTML = sessionStorage.getItem("scoreNumber");
}

const returnCoinStyle = (choice) => {
    if (choice === 'paper') {
        return ['./images/icon-paper.svg', '#4865f4'];
    } else if (choice === 'scissor') {
        return ['./images/icon-scissors.svg', '#ec9e0e'];
    } else {
        return ['./images/icon-rock.svg', '#dc2e4e'];
    }
}

const handleChoice = (choice) => {
    let [imgUrl, coinBorderColor] = returnCoinStyle(choice);
    
    playerBox[0].lastElementChild.style.backgroundImage = 'url('+ imgUrl + ')';
    playerBox[0].lastElementChild.style.borderColor = coinBorderColor;
}

const handleCpuChoice = () => {
    const getRandonChoice = () => {
        const listChoices = ['paper', 'scissor', 'rock'];
        return listChoices[Math.floor(Math.random() * 3)];
    }
    
    let choice = getRandonChoice();
    let [imgUrl, coinBorderColor] = returnCoinStyle(choice);
    
    playerBox[1].lastElementChild.style.backgroundColor = '#ffffff';
    playerBox[1].lastElementChild.style.backgroundImage = 'url('+ imgUrl + ')';
    playerBox[1].lastElementChild.style.borderColor = coinBorderColor;
    
    return choice;
}

const playerWin = () => {
    resultTxt.firstElementChild.innerHTML = 'You Win';
    resultTxt.style.display = 'block';
    
    scoreNumber.innerHTML = parseInt(scoreNumber.innerHTML) + 1;
    sessionStorage.setItem("scoreNumber", scoreNumber.innerHTML);
}

const playerLoss = () => {
    resultTxt.firstElementChild.innerHTML = 'You Lose';
    resultTxt.style.display = 'block';
}

const playerTie = () => {
    resultTxt.firstElementChild.innerHTML = 'Tie';
    resultTxt.style.display = 'block';
}

againBox.addEventListener('click', () => {
    location.reload();
})

rules.addEventListener('click', () => {
    menuOpacity.classList.toggle('display-none');
})

iconClose.addEventListener('click', () => {
    menuOpacity.classList.toggle('display-none');
})

for (let choice of choicePannel.children){
    choice.addEventListener('click', () => {
        choicePannel.style.display = 'none';
        playPannel.style.display = 'flex';

        let playerChoice = choice.className;
        handleChoice(playerChoice);
        let cpuChoice = handleCpuChoice();

        if (playerChoice === 'paper' && cpuChoice === 'rock') {
            setTimeout(playerWin, 500);
        } else if (playerChoice === 'paper' && cpuChoice === 'scissor') {
            setTimeout(playerLoss, 500);
        } else if (playerChoice === 'scissor' && cpuChoice === 'paper') {
            setTimeout(playerWin, 500);
        } else if (playerChoice === 'scissor' && cpuChoice === 'rock') {
            setTimeout(playerLoss, 500);
        } else if (playerChoice === 'rock' && cpuChoice === 'scissor') {
            setTimeout(playerWin, 500);
        } else if (playerChoice === 'rock' && cpuChoice === 'paper') {
            setTimeout(playerLoss, 500);
        } else {
            setTimeout(playerTie, 500);
        } 
    })
}