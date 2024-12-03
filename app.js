document.addEventListener('DOMContentLoaded', function () {
  const buttonTitles = document.querySelectorAll('.buttonTitle')

  buttonTitles.forEach(function (buttonTitle) {
    buttonTitle.addEventListener('click', function () {
      const table = this.nextElementSibling
      const icon = this.querySelector('.expand-icon')

      if (table.classList.contains('hidden')) {
        table.classList.remove('hidden')
        table.classList.add('visible')
        icon.style.transform = 'rotate(180deg)'
      } else {
        table.classList.remove('visible')
        table.classList.add('hidden')
        icon.style.transform = 'rotate(0deg)'
      }
    })
  })

  const images = document.querySelectorAll('.zdjecie')
  let currentIndex = 0

  images.forEach(function (image, index) {
    image.addEventListener('click', function () {
      const enlargedImage = document.querySelector('.powiekszone-zdjecie')
      const enlargedImg = enlargedImage.querySelector('.powiekszenie')
      enlargedImg.src = this.dataset.src // Ustaw źródło powiększonego obrazka
      enlargedImage.style.display = 'block' // Pokaż powiększone zdjęcie
      currentIndex = index // Ustaw aktualny indeks
    })
  })

  const closeButton = document.querySelector('.zamknij')
  closeButton.addEventListener('click', function () {
    const enlargedImage = document.querySelector('.powiekszone-zdjecie')
    enlargedImage.style.display = 'none' // Ukryj powiększone zdjęcie
  })

  // Funkcja do zmiany zdjęcia
  function changeImage(direction) {
    const enlargedImg = document.querySelector('.powiekszenie')
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length // Przechodzi do następnego zdjęcia
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length // Przechodzi do poprzedniego zdjęcia
    }
    enlargedImg.src = images[currentIndex].dataset.src // Ustaw nowe źródło
  }

  // Nasłuchiwanie na kliknięcia strzałek
  document.querySelector('.next').addEventListener('click', function () {
    changeImage('next')
  })

  document.querySelector('.prev').addEventListener('click', function () {
    changeImage('prev')
  })
})
