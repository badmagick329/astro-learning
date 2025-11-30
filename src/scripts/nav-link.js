const minBlue = 80;
const maxBlue = 120;
const step = 2;

let blueValue = minBlue;
let direction = 1;
let intervalId = null;

function startNavLinkAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    const navLinks = document.querySelectorAll(".nav-link");

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
}

startNavLinkAnimation();

document.addEventListener("astro:after-swap", startNavLinkAnimation);

document.addEventListener("astro:before-preparation", () => {
  document.querySelectorAll(".nav-link").forEach((el) => {
    if (el instanceof HTMLButtonElement) el.disabled = true;
    if (el instanceof HTMLElement) {
      el.style.pointerEvents = "none";
      el.style.opacity = "0.5";
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
