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
