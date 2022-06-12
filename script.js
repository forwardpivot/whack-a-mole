// These are to grab the images
const imgOne = document.querySelector('.one');
const imgTwo = document.querySelector('.two');
const imgThree = document.querySelector('.three');
const imgFour = document.querySelector('.four');
const imgFive = document.querySelector('.five')

imgOne.addEventListener('click', checkForPoint);
imgTwo.addEventListener('click', checkForPoint);
imgThree.addEventListener('click', checkForPoint);
imgFour.addEventListener('click', checkForPoint);
imgFive.addEventListener('click', checkForPoint);

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
let countdown = 19;

//Grabbing the score, and the timer DOM things
const score = document.querySelector('.score');
const gameTimer = document.querySelector('.gameTimer');

//THE IS FOR THE REPLAY BUTTON
const replayBtn = document.querySelector('.replayBtn');
replayBtn.addEventListener('click', () => {
    location.reload();
});



//The functions that toggles the image depending on if it has mole or hole as a class name
function changeImg(e) {
    const classList = e.target.classList;
    for (let img in imgs) {
        if (imgs[img].classList.contains('hole') ) {
            imgs[img].src = "img/mole.jpg";
            imgs[img].classList.add('mole');
            imgs[img].classList.remove('hole');
            sec = difficulty;
        } else {
            imgs[img].src = "img/hole.jpg";
            imgs[img].classList.add('hole');
            imgs[img].classList.remove('mole');
            sec = difficulty;
        }
    }
}

function moleTimer(e) {
    if (e.target.classList.contains('easyBtn')) {
        console.log("You clicked easy");
        difficulty = 5;
    } else if (e.target.classList.contains('normalBtn')) {
        console.log("You clicked normal");
        difficulty = 3;
    } else {
        console.log("You clicked hard");
        difficulty = 1;
    }


    let timer = setInterval( () => {
        if (countdown == 0) {
            clearInterval(timer);
            for (let img in imgs) {
                imgs[img].src = "img/hole.jpg";
            }
        }
        sec--;
        console.log(sec)
        if (sec < 0) {
            changeImg(e);
        }
    },1000);
}
//The timer for the game
function gameCountdown() {
    let timer = setInterval(() => {
        if (countdown == 0) {
            clearInterval(timer);
        }
        if(countdown > 0) {
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
        highscore++;
        score.textContent = highscore;
    }
}