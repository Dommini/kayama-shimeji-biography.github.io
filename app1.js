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
