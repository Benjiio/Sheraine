const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');

// 1. Clever workaround for browser autoplay rules
// This triggers the music the very first time the user taps anywhere on the page
document.addEventListener('click', () => {
    if (music.paused && !music.classList.contains('manually-paused')) {
        playSong();
    }
}, { once: true }); // { once: true } makes sure this listener runs exactly once

// 2. Function to handle clicking the corner button
function toggleMusic() {
    if (music.paused) {
        playSong();
        music.classList.remove('manually-paused');
    } else {
        pauseSong();
        // A little tag so the website remembers the user wanted it quiet
        music.classList.add('manually-paused'); 
    }
}

function playSong() {
    music.play().catch(error => console.log("Autoplay blocked until user interaction."));
    musicIcon.className = "fa-solid fa-volume-high"; // Changes icon to playing speaker
    musicBtn.style.animation = "gentleFloat 3s ease-in-out infinite"; // Makes button bob happily
}

function pauseSong() {
    music.pause();
    musicIcon.className = "fa-solid fa-volume-xmark"; // Changes icon to muted speaker
    musicBtn.style.animation = "none"; // Stops the animation
}