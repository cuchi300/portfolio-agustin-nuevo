// Variables
const header = document.querySelector('.header');
const navHeader = document.querySelector('#navbarToggle');

// Event Listeners 
document.addEventListener('scroll', () =>{
    bgMenuNegro();
    scrollEsconder();
})

document.addEventListener('DOMContentLoaded', headerDark);

// Funciones 
// efecto colocar background negro al menu
function bgMenuNegro() {
    const scrolling = window.scrollY;

    const move = 'all .3s';

    if(scrolling > 0){
        header.classList.add('shadow', 'header__dark');
        navHeader.classList.remove('navegacion__nav-negro');
        header.style.transition = move;
    } else{
        header.classList.remove('shadow', 'header__dark');
        navHeader.classList.add('navegacion__nav-negro');
    }
}

// efecto esconder menu al hacer scroll en cualquier parte del documento
function scrollEsconder() {
    const navButton = document.getElementById('nav-button');
    const scrollWindow = window.scrollY;

    if(scrollWindow){
        navButton.classList.add('collapsed');
        navHeader.classList.remove('show');
    }
}

function headerDark() {
    const scrolling = window.scrollY;
    const heightViewport = window.innerHeight;

    if(scrolling > 0 && heightViewport > 0){
        header.classList.add('shadow', 'header__dark');
    } 
}