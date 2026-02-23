

const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener("click", (event) => {
  if (event.target.classList.contains('numbers')) {
    result.value += event.target.textContent;
  }
  if (event.target.classList.contains('clear')) {
    result.value = '';
  }
  if (event.target.classList.contains('divide')) {
    result.value += '/';
  }
  if (event.target.classList.contains('multiply')) {
    result.value += '*';
  }
  if (event.target.classList.contains('subtract')) {
    result.value += '-';
  }
  if (event.target.classList.contains('add')) {
    result.value += '+';
  }
});

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}