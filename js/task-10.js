function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.querySelector('#boxes');
console.log(boxesDiv);

let amount = 0;

const btInput = document.querySelector('input');
btInput.addEventListener('input', evt => {
  // console.dir(evt.currentTarget.value);
  amount = evt.currentTarget.value;
});

const btCreate = document.querySelector(
  'button[data-create]'
);
// console.dir(btCreate);
btCreate.addEventListener('click', () => {
  // console.log(evt);
  console.dir('jjkj');
  createBoxes(amount);
});

let width = 20;
let height = 20;

//  console.log(amount);
function createBoxes() {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxesDiv.appendChild(box);
    // boxesDiv.insertAdjacentElement('beforeend', box)

    console.log(box);

    console.log(boxesDiv);
  }
}

const btDest = document.querySelector(
  'button[data-destroy]'
);
console.dir(btDest);
btDest.addEventListener('click', evt => {
  console.dir('3333');

  destroyBoxes();
});

function destroyBoxes() {
  width = 20;
  height = 20;
  boxesDiv.innerHTML = [];
  btInput.value = 0;
}

console.log(amount);
// console.log(box);
