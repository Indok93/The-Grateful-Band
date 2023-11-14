/* lav funktion der ændre property display 
til flex når burger-menu er klikket */
const buttonBurger = document.getElementById('burgerMenu');

buttonBurger.addEventListener('click', () => {
    const navBar = document.getElementById('navigation');
    navBar.style.display = 'flex';
});

function changeBackground(url) {
    document.querySelector('header').style.backgroundImage = `url('${url}')`;
}

