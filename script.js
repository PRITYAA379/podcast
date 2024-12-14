// Play devotional sound when the page loads
const audio = document.getElementById('devotion-sound');
audio.play();

// Interactive effect when hovering over the moon
const moon = document.querySelector('.moon-container');
moon.addEventListener('mouseover', () => {
  moon.style.transform = 'scale(1.1)';
  audio.volume = 0.7; // Adjust sound volume when focusing
});

moon.addEventListener('mouseout', () => {
  moon.style.transform = 'scale(1)';
  audio.volume = 0.5; // Reset sound volume
});
