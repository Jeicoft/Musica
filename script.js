

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

playBtn.addEventListener('click', function() {
    audio.play();
    status.innerText = 'Estado: Reproduciendo';
});

pauseBtn.addEventListener('click', function() {
    audio.pause();
    status.innerText = 'Estado: Pausado';
});


const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
