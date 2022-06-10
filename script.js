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













function changeImg(e) {
    const classList = e.target.classList;
    if (classList.contains('hole') ) {
        e.target.src = "img/mole.jpg";
        e.target.classList.add('mole');
        e.target.classList.remove('hole');
    } else {
        e.target.src = "img/hole.jpg"
        e.target.classList.add('hole');
        e.target.classList.remove('mole');
    }
}