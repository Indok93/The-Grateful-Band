
const buttonBurger = document.getElementById('burgerMenu');

buttonBurger.addEventListener('click', (e) => {
    e.preventDefault();
    const navBar = document.getElementById('navigation');
    const cards = document.querySelector('.card-wrapper');
    const logo = document.getElementById('logo-main');
    const burger = document.querySelector('.burger-menu');
    const tour = document.querySelector('.tours-wrapper');
    burger.classList.toggle('active');
    navBar.classList.toggle('active');
    logo.classList.toggle('active');
    if (cards) {
        cards.classList.toggle('active');
    }
    if (tour) {
        tour.classList.toggle('active');
    }
});

const buttonSubmit = document.getElementById('submitButton');
if (buttonSubmit) {
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(buttonSubmit);

        buttonSubmit.style.width = 'calc(100% - 2px)';
        buttonText = document.querySelector('.before-submit');
        buttonText.innerText = 'Subscribed';
        /* MANGLER VALIDERING, snippets forsvundet */
    });
}


let currentBackgroundIndex = 0;
const backgrounds = [
    '/assets/uploads/images/pexels-vishnu-r-nair-1105666.jpg',
    '/assets/uploads/images/pexels-josh-sorenson-995301.jpg',
    '/assets/uploads/images/pexels-jc-siller-8634867.jpg',
    '/assets/uploads/images/pexels-brett-sayles-1309240.jpg',
    '/assets/uploads/images/pexels-oleg-magni-1813124.jpg',
    '/assets/uploads/images/pexels-wendy-wei-1699161.jpg'
];

function changeBackground(index) {
    const headerBackground = document.querySelector('header');
    headerBackground.style.backgroundImage = `url('${backgrounds[index]}')`;

    // Removing the active class from each bullets
    document.querySelectorAll('.bullet').forEach(bullet => {
        bullet.classList.remove('active');
    })

    // Add the "active" class to the clicked bullet
    document.querySelector(`.bullet:nth-child(${index + 1})`).classList.add('active');

    currentBackgroundIndex = index;
}

function nextBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    changeBackground(currentBackgroundIndex);
}

// Change background every x amount of seconds (in milliseconds)
setInterval(nextBackground, 10000);