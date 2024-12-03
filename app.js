document.addEventListener('DOMContentLoaded', function () {
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
})
