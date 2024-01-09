const size = document.querySelector('#font-size-control');
size.addEventListener('input', onSize);

const text = document.querySelector('#text');

function onSize(evt) {
  const size = evt.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
