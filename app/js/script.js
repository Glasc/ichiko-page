const nav = document.querySelector('.nav')
const navMobile = document.querySelector('.nav-mobile')
const navIcon = document.querySelector('.nav-mobile__icon')
const navLinks = document.querySelector('.nav-mobile__links')

setInterval(() => {
  const isScrolling = window.scrollY > 0
  if (isScrolling) {
    navMobile.setAttribute('scrolling', '')
    return nav.setAttribute('scrolling', '')
  }

  nav.removeAttribute('scrolling')
  navMobile.removeAttribute('scrolling')
}, 350)

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
