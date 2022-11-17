const satellite = document.querySelector(".satellite-experience-canvas");
const satelliteWrapper = document.querySelector(".satellite-experience");
const secondSection = document.querySelector(".second-section");

const room = document.querySelector(".experience-canvas");
const button = document.querySelector(".button-zoomer");

const filled = document.querySelector(".filled");

let flag = true;
let flagWrapper = true;

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    // easing: "easeOutExpo",
    duration: 600,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width *
        2.65,
    ],
    easing: "easeOutExpo",
    duration: 600,
    delay: 50,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    // easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: Infinity,
    easing: "easeOutExpo",
    delay: 1000,
  });
