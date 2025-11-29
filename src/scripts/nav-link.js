const navLinks = document.querySelectorAll('.nav-link')

const minBlue = 80
let blueValue = minBlue
let direction = 1
const maxBlue = 120
const step = 2

setInterval(() => {
  blueValue += step * direction

  if (blueValue >= maxBlue) {
    blueValue = maxBlue
    direction = -1
  } else if (blueValue <= minBlue) {
    blueValue = minBlue
    direction = 1
  }

  navLinks.forEach(n => {
    n.style.backgroundColor = `rgb(20, 20, ${blueValue})`
  })
}, 50)