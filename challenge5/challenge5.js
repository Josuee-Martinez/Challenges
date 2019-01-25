let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let multiplytn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let remainderBtn = document.querySelector('.remainder');
let resultParagraph = document.querySelector('.calc-result');

let calculate;

let executeEvents = () => {
  plusBtn.addEventListener('click', addFunc);
  minusBtn.addEventListener('click', subtractFunc);
  multiplytn.addEventListener('click', multiplyFunc);
  divideBtn.addEventListener('click', divideFunc);
  remainderBtn.addEventListener('click', remainderFunc);
}

let addFunc = () => {
  let firstInput = parseInt(document.querySelector('.first-input').value);
  let secondInput = parseInt(document.querySelector('.second-input').value);  
  calculate = firstInput + secondInput;
  resultParagraph.innerText = calculate;
  clearInputs();
}


let subtractFunc = () => {
  let firstInput = parseInt(document.querySelector('.first-input').value);
  let secondInput = parseInt(document.querySelector('.second-input').value);  
  calculate = firstInput - secondInput;
  resultParagraph.innerText = calculate;
  clearInputs();
  
}

let multiplyFunc = () => {
  let firstInput = parseInt(document.querySelector('.first-input').value);
  let secondInput = parseInt(document.querySelector('.second-input').value);  
  calculate = firstInput * secondInput;
  resultParagraph.innerText = calculate;
  clearInputs();
}

let divideFunc = () => { 
  let firstInput = parseInt(document.querySelector('.first-input').value);
  let secondInput = parseInt(document.querySelector('.second-input').value);  
  calculate = firstInput / secondInput;
  resultParagraph.innerText = calculate;
  clearInputs();
  
}

let remainderFunc = () => {
  let firstInput = parseInt(document.querySelector('.first-input').value);
  let secondInput = parseInt(document.querySelector('.second-input').value);  
  calculate = firstInput % secondInput;
  resultParagraph.innerText = calculate;
  clearInputs();
  
}

let clearInputs = () => {
  document.querySelector('.first-input').value = '';
  document.querySelector('.second-input').value = '';
}

let emptyField = () => {
  resultParagraph.innerText = 'entera valid number';
}

executeEvents();



