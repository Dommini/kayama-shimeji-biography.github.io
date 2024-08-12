// Pobierz wszystkie divy o klasie buttonTitle
var buttonTitles = document.querySelectorAll('.buttonTitle')

// Iteruj przez każdy div buttonTitle
buttonTitles.forEach(function (buttonTitle) {
  // Pobierz kolejny element po divie buttonTitle, który jest tabelą
  var table = buttonTitle.nextElementSibling

  // Dodaj klasę "hidden" do tabeli, aby ją ukryć na początku
  table.classList.add('hidden')

  // Dodaj nasłuchiwanie zdarzenia kliknięcia
  buttonTitle.addEventListener('click', function () {
    // Toggle klasy "hidden" dla tabeli
    table.classList.toggle('visible')
    table.classList.toggle('hidden')

    // Zmieniaj ikonę "+" na "-" (i na odwrót) dla diva .expand-icon
    var expandIcon = buttonTitle.querySelector('.expand-icon')
    expandIcon.textContent = expandIcon.textContent === '▼' ? '▲' : '▼'

    // Dodaj obrót dla ikony po kliknięciu
    if (expandIcon.textContent === '▲') {
      expandIcon.style.transition = 'transform 0.7s ease' // Ustawienie płynności transformacji
      expandIcon.style.transform = 'rotate(360deg)' // Obrót ikony
    } else {
      expandIcon.style.transition = 'transform 0.7s ease' // Ustawienie płynności transformacji
      expandIcon.style.transform = 'rotate(0deg)' // Obrót ikony
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/gif'
  link.href = 'img/full_x3_happy.gif' // Ścieżka do Twojego GIF-a
  document.head.appendChild(link)
})
document.addEventListener('DOMContentLoaded', function () {
  const themeToggleButton = document.getElementById('theme-toggle')
  const currentTheme = localStorage.getItem('theme')
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  function applyDarkMode(darkMode) {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document
        .querySelectorAll(
          'button, table, th, td, h1, h2, h4, h5, a, input, textarea',
        )
        .forEach((element) => element.classList.add('dark-mode'))
    } else {
      document.body.classList.remove('dark-mode')
      document
        .querySelectorAll(
          'button, table, th, td, h1, h2, h4, h5, a, input, textarea',
        )
        .forEach((element) => element.classList.remove('dark-mode'))
    }
  }

  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
    applyDarkMode(true)
  }

  themeToggleButton.addEventListener('click', function () {
    const darkModeEnabled = document.body.classList.toggle('dark-mode')
    applyDarkMode(darkModeEnabled)
    const theme = darkModeEnabled ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
  })
})
