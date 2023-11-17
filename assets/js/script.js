
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



const inputValue = document.querySelector('.add-email');
const buttonSubmit = document.getElementById('submitButton');
const contentBox = document.getElementsByTagName('header');

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // Når knappen trykkes skal værdien af input læses og godkendes med email validering
    if (inputValue.value.match(validateEmail())) {
        const errorMessage = document.querySelector('.error-message');
        buttonSubmit.style.width = 'calc(100% - 2px)';
        buttonText = document.querySelector('.before-submit');
        buttonText.innerText = 'Subscribed';
        inputValue.style = 'border: none;';
        if (errorMessage) {
            errorMessage.classList.remove('error-message');
        }
    } else if (inputValue.value === ''){
        inputValue.style = 'border: 1px solid red; border-radius: 20px;';

    } else {
        inputValue.style = 'border: 1px solid red; border-radius: 20px;';
        let errorBox = document.querySelector('.error-message');

        if(!errorBox) {
            errorBox = document.createElement('div');
            errorBox.classList.add('error-message');
            contentBox[0].appendChild(errorBox);
        }
        
        let errorHtml = `<p>please type a valid email address!</p>`;

        errorBox.innerHTML = errorHtml;
    }
});
function validateEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex;     
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
setInterval(nextBackground, 5000122);