// Get the devotion sound element
const audio = document.getElementById('devotion-sound');

// Get the moon element for interactive effect
const moon = document.querySelector('.moon-container');

// Play sound when hovering over the moon
moon.addEventListener('mouseover', () => {
  // Play the audio when mouse is over the moon, if not already playing
  if (audio.paused) {
    audio.play();
  }

  // Interactive effect: Scale moon and adjust volume
  moon.style.transform = 'scale(1.1)';
  audio.volume = 0.7; // Adjust sound volume when focusing
});

// Reset interactive effect when mouse leaves the moon
moon.addEventListener('mouseout', () => {
  moon.style.transform = 'scale(1)';
  audio.volume = 0.5; // Reset sound volume
  // Pause the audio when mouse leaves (optional)
  audio.pause();
  audio.currentTime = 0; // Reset the audio to start when hovered again
});
