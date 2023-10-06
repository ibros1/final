let isDarkMode = false;

function toggleDarkMode() {
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const body = document.body;

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
  //Kadhig Madow
    sunIcon.classList.add('sun-opacity');
    moonIcon.classList.remove('hidden');
    moonIcon.classList.add('moon-opacity');
    sunIcon.classList.remove('sun-opacity');
    body.classList.add('dark-mode');
  } else {
    // Revert to light mode
    moonIcon.classList.add('moon-opacity');
    sunIcon.classList.remove('hidden');
    sunIcon.classList.add('sun-opacity');
    moonIcon.classList.remove('moon-opacity');
    body.classList.remove('dark-mode');
  }
}
