//Tema claro y oscuro //
const toggle = document.getElementById('Toggle');
const labelToggle = document.getElementById('label-Toggle');

function applyThemeFromStorage() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    applyDarkTheme();
  }
}

function applyDarkTheme() {
  document.body.classList.add('dark');
  toggle.checked = true;
  setToggleIcon(true);
}

function applyLightTheme() {
  document.body.classList.remove('dark');
  toggle.checked = false;
  setToggleIcon(false);
}

function setToggleIcon(isDark) {
  const icon = labelToggle.querySelector('.icon');

  if (isDark) {
    icon.innerHTML = '<i class="fas fa-sun"></i>';
    labelToggle.style.color = 'yellow';
  } else {
    icon.innerHTML = '<i class="fas fa-moon"></i>';
    labelToggle.style.color = 'white';
  }
}

toggle.addEventListener('change', (event) => {
  const checked = event.target.checked;
  if (checked) {
    applyDarkTheme();
    localStorage.setItem('theme', 'dark');
  } else {
    applyLightTheme();
    localStorage.setItem('theme', 'light');
  }
});

document.addEventListener('DOMContentLoaded', applyThemeFromStorage);

//Boton de buscador//
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('Results');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTitles = blogTitles.filter(title =>
    title.toLowerCase().includes(searchTerm)
  );
  displayResults(filteredTitles);
});

searchButton.addEventListener('click', () => {
  searchForm.classList.toggle('active');
  if (searchForm.classList.contains('active')) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
  updateResults();
});





