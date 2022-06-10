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
const easyBtn = document.querySelector('.easy');
easyBtn.addEventListener('click', moleTimer);












//The function that toggles the image depending on the if it has mole or hole as a class name
function changeImg(e) {
    const classList = e.target.classList;
    if (classList.contains('hole') ) {
        e.target.src = "img/mole.jpg";
        e.target.classList.add('mole');
        e.target.classList.remove('hole');
        console.log("In the changeImg if");
    } else {
        e.target.src = "img/hole.jpg"
        e.target.classList.add('hole');
        e.target.classList.remove('mole');
        console.log("In the changeImg else");
    }
}

function moleTimer(e) {
    let sec = 3;
    let timer = setInterval( () => {
        console.log(sec);
        sec--;
        if (sec < 0) {
            console.log("In the if");
            changeImg(e);
        }
    },1000);
}