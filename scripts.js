// Simple text rotation effect
const texts = [
    'Tanuj Sharma',
    'Back-End Developer', 
    'Python Enthusiast', 
    'Django Learner', 
    'AI & ML Student', 
    'Gamer',
    'Designer'
];

const dynamicText = document.getElementById('dynamic-text');
let currentIndex = 0;

function rotateText() {
    dynamicText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Initial rotation
rotateText();

// Rotate text every 2 seconds
setInterval(rotateText, 2000);


