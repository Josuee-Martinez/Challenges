let form = document.querySelector('.signup-form');
let emailInput = document.querySelector('#email');
let passInput = document.querySelector('#password');
let passReenter = document.querySelector('#password-reenter');
let submitBtn = document.querySelector('.submit-btn');

let executeEvents = () => {
  form.addEventListener('submit', submitForm);
}

let submitForm = (e) => {
  if(emailInput.value === '' || passInput.value === '' || passReenter.value === '') {
    fieldAlert('Please fill out all required fields', 'error');
  } else if(passInput.value !== passReenter.value) {
    fieldAlert('Your Password does not match', 'error');
  } else {
    fieldAlert('you are signed in', 'succes')
  }
  e.preventDefault();

  clearInputs();
}

let fieldAlert = (msg, className) => {
  let div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  let parent = document.querySelector('.box-forma');
  let heading = document.querySelector('.title');

  parent.insertBefore(div, heading);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3500);
}

let clearInputs = () => {
  emailInput.value = '';
  passInput.value = '';
  passReenter.value = '';
}

executeEvents();

alert('hi');