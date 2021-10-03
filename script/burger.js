const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuActive = document.querySelectorAll('.menu-list__item')


const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuActive.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    menuElem.classList.remove('menu-active')
  })
})

