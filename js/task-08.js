const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  //   console.dir(evt.currentTarget.elements.email.value);
  //   console.dir(evt.currentTarget.elements.password.value);

  if (
    evt.currentTarget.elements.email.value &&
    evt.currentTarget.elements.password.value
  ) {
    const { email, password } = evt.currentTarget.elements;
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    evt.currentTarget.reset();
  } else {
    console.log(alert('Все поля должны быть заполнены!'));
  }
}
