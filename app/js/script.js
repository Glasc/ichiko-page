const navMobile = document.querySelector('.nav-mobile')
const navIcon = document.querySelector('.nav-mobile__icon')
const navLinks = document.querySelector('.nav-mobile__links')

navIcon.addEventListener('click', (e) => {
  const currentIcon = e.target.getAttribute('src')
  const isNavbarMobileOpen = currentIcon === './burguer.svg'

  if (isNavbarMobileOpen) {
    navIcon.setAttribute('src', './close.svg')
    navLinks.removeAttribute('hide')
    navMobile.setAttribute('open', '')
  } else {
    navIcon.setAttribute('src', './burguer.svg')
    navLinks.setAttribute('hide', '')
    navMobile.removeAttribute('open')
    navMobile.classList.a
  }
})
