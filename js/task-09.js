function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');

const colorText = document.querySelector('.color');
console.dir(colorText.textContent);

const button = document.querySelector(
  'button.change-color'
);

// button.onclick = function (evt) {
button.addEventListener('click', () => {
  // console.log(evt);

  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = `${getRandomHexColor()}`;
});
