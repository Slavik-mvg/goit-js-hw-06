const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const value = document.querySelector('#value');

buttonDecrement.addEventListener(
  'click',
  offClick
);
buttonIncrement.addEventListener(
  'click',
  onClick
);

let counterValue = 0;
function onClick() {
  counterValue += 1;
  value.textContent = `${counterValue}`;
}
function offClick() {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
}

console.dir(value);
