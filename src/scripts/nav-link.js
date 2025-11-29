const navLinks = document.querySelectorAll(".nav-link");

const minBlue = 80;
let blueValue = minBlue;
let direction = 1;
const maxBlue = 120;
const step = 2;

setInterval(() => {
  blueValue += step * direction;

  if (blueValue >= maxBlue) {
    blueValue = maxBlue;
    direction = -1;
  } else if (blueValue <= minBlue) {
    blueValue = minBlue;
    direction = 1;
  }

  navLinks.forEach((n) => {
    n.style.backgroundColor = `rgb(20, 20, ${blueValue})`;
  });
}, 50);

document.addEventListener("astro:before-preparation", () => {
  document.querySelectorAll(".nav-link").forEach((el) => {
    if (el instanceof HTMLButtonElement) el.disabled = true;
    if (el instanceof HTMLElement) {
      el.style.pointerEvents = "none";
      el.style.opacity = "0.5"; // optional visual feedback
    }
  });
});

document.addEventListener("astro:after-swap", () => {
  document.querySelectorAll(".nav-link").forEach((el) => {
    if (el instanceof HTMLButtonElement) el.disabled = false;
    if (el instanceof HTMLElement) {
      el.style.pointerEvents = "auto";
      el.style.opacity = "1";
    }
  });
});
