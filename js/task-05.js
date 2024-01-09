const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', onSubmit);

function onSubmit(evt) {
  const input = evt.currentTarget.value;
  nameOutput.textContent = input;
  if (input === '') {
    nameOutput.textContent = 'Anonymous';
  }
}
