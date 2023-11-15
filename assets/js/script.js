
const buttonBurger = document.getElementById('burgerMenu');

buttonBurger.addEventListener('click', (e) => {
    e.preventDefault();
    const navBar = document.getElementById('navigation');
    const burgerMenu = document.querySelector('.burger-menu');
    const cards = document.querySelector('.card-wrapper');
    navBar.style.display = 'flex';
    burgerMenu.style.backgroundColor = 'transparent';
    if (cards) {
        cards.style.display = 'none';
    }
});

const buttonSubmit = document.getElementById('submitButton');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(buttonSubmit);
    buttonSubmit.style.width = 'calc(100% - 2px)';
    buttonText = document.querySelector('.before-submit');
    buttonText.innerText = 'Subscribed';

});

function changeBackground(url) {
    const headerBackground = document.querySelector('header');
    headerBackground.style.backgroundImage = `url('${url}')`;
}
