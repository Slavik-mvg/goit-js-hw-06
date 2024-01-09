const inputText = document.querySelector(
  '#validation-input'
);
console.dir(inputText.dataset.length);

inputText.addEventListener('blur', inputForm);

const length = inputText.dataset.length;

function inputForm(evt) {
  console.log(evt.currentTarget.value.length);
  if (
    evt.currentTarget.value.length ==
    inputText.dataset.length
  ) {
    if (inputText.classList.contains('invalid')) {
      inputText.classList.remove('invalid');
    }
    inputText.classList.add('valid');
  } else {
    if (inputText.classList.contains('valid')) {
      inputText.classList.remove('valid');
    }
    inputText.classList.add('invalid');
  }
}
