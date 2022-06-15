// These are to grab the images
const moleOne = document.querySelector('.one');
const moleTwo = document.querySelector('.two');
const moleThree = document.querySelector('.three');
const moleFour = document.querySelector('.four');
const moleFive = document.querySelector('.five')

moleOne.addEventListener('click', checkForPoint);
moleTwo.addEventListener('click', checkForPoint);
moleThree.addEventListener('click', checkForPoint);
moleFour.addEventListener('click', checkForPoint);
moleFive.addEventListener('click', checkForPoint);

//This is for the buttons that dictate difficulty
let imgs = document.querySelectorAll('img');
const easyBtn = document.querySelector('.easyBtn');
const normalBtn = document.querySelector('.normalBtn');
const hardBtn = document.querySelector('.hardBtn');

easyBtn.addEventListener('click', moleTimer);
easyBtn.addEventListener('click', gameCountdown);
normalBtn.addEventListener('click', moleTimer);
normalBtn.addEventListener('click', gameCountdown);
hardBtn.addEventListener('click', moleTimer);
hardBtn.addEventListener('click', gameCountdown);

//Global variables so that they can be change from inside functions
let sec = 0;
let difficulty = 0;
let highscore = 0;
let countdown = 15;
let isMole = false;
let selected;
//Grabbing the score, and the timer DOM things
const score = document.querySelector('.score');
const gameTimer = document.querySelector('.gameTimer');

//THE IS FOR THE REPLAY BUTTON
const replayBtn = document.querySelector('.replayBtn');
replayBtn.addEventListener('click', () => {
    location.reload();
});

/*I need a way for the moles to pop up randomly, and for them to go back down on click
* I need a way to set the difficulty based on which button is clicked. 
* I need my timers to work
* When a difficulty is selected I think each hole should randomly start popping up the moles,
and depending on the timer, or if they were hit should pop them back down, and then randomly pop them back up
*/


//The functions that toggles the image depending on if it has mole or hole as a class name
function changeImg(e) {
    const classList = e.target.classList;
    if (isMole == false && countdown > 0) {
        let num = Math.floor(Math.random() * 5);
        switch(num) {
            case 0: 
                moleOne.src = "img/mole.jpg";
                moleOne.classList.add('mole');
                moleOne.classList.remove('hole');
                selected = moleOne;
                isMole = true;
                sec = difficulty;
                break;
            case 1: 
                moleTwo.src = "img/mole.jpg";
                moleTwo.classList.add('mole');
                moleTwo.classList.remove('hole');
                selected = moleTwo;
                isMole = true;
                sec = difficulty;
                break;
            case 2:
                moleThree.src = "img/mole.jpg";
                moleThree.classList.add('mole');
                moleThree.classList.remove('hole');
                selected = moleThree;
                isMole = true;
                sec = difficulty;
                break;
            case 3:
                moleFour.src = "img/mole.jpg";
                isMole = true;
                moleFour.classList.add('mole');
                moleFour.classList.remove('hole');
                selected = moleFour;
                sec = difficulty;
                break;
            case 4:
                moleFive.src = "img/mole.jpg";
                moleFive.classList.add('mole');
                moleFive.classList.remove('hole');
                selected = moleFive;
                isMole = true;
                sec = difficulty;
                break;
        }
    }
}


function moleTimer(e) {
    if (e.target.classList.contains('easyBtn')) {
        difficulty = 5;
        sec = difficulty
    } else if (e.target.classList.contains('normalBtn')) {
        difficulty = 3;
        sec = difficulty;
    } else {
        difficulty = 1;
        sec = difficulty;
    }
    
    let timer = setInterval( () => {
        if (countdown <= 0) {
            for (let img in imgs) {
                imgs[img].src = "img/hole.jpg";
            }
            clearInterval(timer);
        }
        --sec;
        if (sec >= 0) {
            changeImg(e);
        } else {
            selected.src = "img/hole.jpg";
            selected.classList.add('hole');
            selected.classList.remove('mole');
            sec = difficulty;
            isMole = false;
            changeImg(e);
        }
    },1000);
}
//The timer for the game
function gameCountdown() {
    let timer = setInterval(() => {
        if (countdown == 0) {
            gameTimer.textContent = '0';
            clearInterval(timer);
        }
        if(countdown <=10) {
            gameTimer.style.fontSize = '35px';
            gameTimer.style.color = 'red';
            countdown--;
            gameTimer.textContent = countdown;
        } else if (countdown > 0) {
            countdown--;
            gameTimer.textContent = countdown;
        }
    }, 1000);
}

//The function that checks to see if they get a point
function checkForPoint(e) {
    if (countdown == 0) {
        return;
    }
    const classList = e.target.classList;
    if (classList.contains('mole')) {
        isMole = false;
        e.target.src = "img/hole.jpg";
        classList.add('hole');
        classList.remove('mole');
        highscore++;
        score.textContent = highscore;
    }
}