/* JavaScript */

window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const body = document.body;
const scrollThresholds = [100, 300, 600, 900]; // adjust these values to change the scroll points
const bgColors = ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0']; // adjust these values to change the background colors
const fontFamilies = ['Arial', 'Helvetica', 'Verdana', 'Tahoma']; // adjust these values to change the font families

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  let index = 0;

  for (let i = 0; i < scrollThresholds.length; i++) {
    if (scrollPosition >= scrollThresholds[i]) {
      index = i;
    }
  }

  body.style.background = bgColors[index];
  body.style.fontFamily = fontFamilies[index];
});