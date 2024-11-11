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
})
