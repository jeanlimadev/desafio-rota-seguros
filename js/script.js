const header = document.querySelector('.header')
const slides = document.querySelectorAll('.slide')
const buttons = document.querySelectorAll('.button')
const burger = document.querySelector('.burger')
const menuMobile = document.querySelector('.menuMobile')

// Função menu hambúger
burger.onclick = function() {
  menuMobile.classList.toggle('actived')
  burger.classList.toggle('actived')
}

// Função de scroll (colorir header ao descer a página)
window.addEventListener('scroll', () => {
  if (window.scrollY != 0) {
    header.classList.add('colorized')
  } else {
    header.classList.remove('colorized')
  }
})


// Navegação manual slider
let currentSlide = 1

const manualNav = manual => {
  slides.forEach(slide => {
    slide.classList.remove('active')

    buttons.forEach(btn => {
      btn.classList.remove('active')
    })
  })

  slides[manual].classList.add('active')
  buttons[manual].classList.add('active')
}

buttons.forEach((btn, i) => {
  btn.onclick = () => {
    manualNav(i)
    currentSlide = i
  }
})

// Navegação automática slider
const automaticNav = function(activeClass) {
  const active = document.getElementsByClassName('active')
  let i = 1

  const repeater = () => {
    setTimeout(() => {
      [...active].forEach(activeSlide => {
        activeSlide.classList.remove('active')
      })

      slides[i].classList.add('active')
      buttons[i].classList.add('active')
      i++

      slides.length === i ? i = 0 : ''
      if (i >= slides.length) {
        return
      }
      repeater()
    }, 5000)
  }
  repeater()
}

automaticNav()