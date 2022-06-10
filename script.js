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
const easyBtn = document.querySelector('.easy');
easyBtn.addEventListener('click', moleTimer);


//The functions that toggles the image depending on the if it has mole or hole as a class name
function changeImg(e) {
    const classList = e.target.classList;
    for (let img in imgs) {
        if (imgs[img].classList.contains('hole') ) {
            imgs[img].src = "img/mole.jpg";
            imgs[img].classList.add('mole');
            imgs[img].classList.remove('hole');
        } else {
            imgs[img].src = "img/hole.jpg"
            imgs[img].classList.add('hole');
            imgs[img].classList.remove('mole');
        }
    }
}

function moleTimer(e) {
    let sec = 5;

    let timer = setInterval( () => {
        console.log(sec);
        sec--;
        if (sec < 0) {
            changeImg(e);
        }
    },1000);
}

//The function that checks to see if they get a point
function checkForPoint(e) {
    const classList = e.target.classList;
    if (classList.contains('mole')) {
        console.log("You got a point!")
    }
}