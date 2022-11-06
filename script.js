const satellite = document.querySelector(".satellite-experience-canvas");
const satelliteWrapper = document.querySelector(".satellite-experience");
const secondSection = document.querySelector(".second-section");

const room = document.querySelector(".experience-canvas");
const button = document.querySelector(".button-zoomer");

const filled = document.querySelector(".filled");

let flag = true;
let flagWrapper = true;

function updateProgressBar() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(updateProgressBar);
}

updateProgressBar();

// const zoomIn = () => {
//   anime({
//     targets: room,
//     scale: {
//       value: 1.5,
//     },
//     translateY: 100,
//   });
// };

// button.addEventListener("mousedown", zoomIn);

// secondSection.addEventListener("mousedown", () => {
//   if (flagWrapper) {
//     fullScreenSecondSection();
//     flagWrapper = !flagWrapper;
//   } else {
//     fullScreenSecondSectionCancel();
//     flagWrapper = !flagWrapper;
//   }
// });

// const satelliteMouseoverAnimation = () => {
//   anime({
//     targets: satellite,
//     scale: {
//       value: 1.5,
//     },
//   });Í
// };

// const satelliteMouseoverAnimationCancel = () => {
//   anime({
//     targets: satellite,
//     scale: {
//       value: 1,
//     },
//   });
// };

// const satelliteWrapperExpansion = () => {
//   anime({
//     targets: satelliteWrapper,
//     scale: {
//       value: 1.5,
//     },
//     translateX: -800,
//   });
// };

// const satelliteWrapperExpansionCancel = () => {
//   anime({
//     targets: satelliteWrapper,
//     scale: {
//       value: 1,
//     },
//     translateX: 0,
//   });
// };

// const fullScreenSecondSection = () => {
//   anime({
//     targets: secondSection,
//     width: "100%",
//     // translateX: -900,
//   });
// };

// const fullScreenSecondSectionCancel = () => {
//   anime({
//     targets: secondSection,
//     width: "50%",
//     translateX: 0,
//   });
// };

// satellite.addEventListener("mouseover", () => {
//   if (flag) {
//     satelliteMouseoverAnimation();
//     flag = !flag;
//   } else {
//     satelliteMouseoverAnimationCancel();
//     flag = !flag;
//   }
// });
