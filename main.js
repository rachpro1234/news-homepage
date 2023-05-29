

// here we have called the buttons through its Id.
document.getElementById('open-menu').addEventListener('click', openMenu);
document.getElementById('close-menu').addEventListener('click', closeMenu);




// the navigation bar will poop up when you click on the bar menu
function openMenu() {
    document.querySelector('.nav-links').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}

// the navigation bar will close when you click on the close icon
function closeMenu() {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}