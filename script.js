// These are to grab the images
const imgOne = document.querySelector('.one');
const imgTwo = document.querySelector('.two');
const imgThree = document.querySelector('.three');
const imgFour = document.querySelector('.four');
const imgFive = document.querySelector('.five')

imgOne.addEventListener('click', changeImg);
imgTwo.addEventListener('click', changeImg);
imgThree.addEventListener('click', changeImg);
imgFour.addEventListener('click', changeImg);
imgFive.addEventListener('click', changeImg);

//This is for the buttons that dictate difficulty
let imgs = document.querySelectorAll('.gameImg');
const easyBtn = document.querySelector('.easy');
easyBtn.addEventListener('click', moleTimer);


//The function that toggles the image depending on the if it has mole or hole as a class name
function changeImg(e) {
    const classList = e.target.classList;
    for (let i = 0; i < imgs.length; i++) {
        if ( imgs[i].classList.contains('hole') ) {
            imgs[i].src = "img/mole.jpg";
            imgs[i].classList.add('mole');
            imgs[i].classList.remove('hole');
            console.log(classList);
        } else {
            imgs[i].src = "img/hole.jpg"
            imgs[i].classList.add('hole');
            imgs[i].classList.remove('mole');
        }
    }
}

function moleTimer(e) {
    let sec = 2;

    let timer = setInterval( () => {
        console.log(sec);
        sec--;
        if (sec < 0) {
            console.log("In the if");
            changeImg(e);
        }
    },1000);
}