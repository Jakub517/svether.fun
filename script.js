const toggleButton = document.getElementsByClassName('odkazove-tlacitko')[0]
const navbarLinks = document.getElementsByClassName('navigace-link')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})