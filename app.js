document.addEventListener('DOMContentLoaded', function () {
  const miniatury = document.querySelectorAll('.zdjecie')
  const powiekszoneZdjecie = document.querySelector('.powiekszone-zdjecie')
  const zdjecie = powiekszoneZdjecie.querySelector('.powiekszenie')
  const zamknij = powiekszoneZdjecie.querySelector('.zamknij')

  miniatury.forEach(function (miniatura) {
    miniatura.addEventListener('click', function () {
      const src = this.getAttribute('data-src')
      zdjecie.setAttribute('src', src)
      powiekszoneZdjecie.style.display = 'block'
    })
  })

  zamknij.addEventListener('click', function () {
    powiekszoneZdjecie.style.display = 'none'
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
