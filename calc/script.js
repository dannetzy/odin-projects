const calc = document.querySelector('.calc');
const result = document.querySelector('.result');

const resultFirst = result.children[0];
const resultOperand = result.children[1];
const resultLast = result.children[2];

const operations = {
  '+'(a, b) {
    return a + b;
  },
  '-'(a, b) {
    return a - b;
  },
  '*'(a, b) {
    return a * b;
  },
  '/'(a, b) {
    if (b === 0) {
      alert("sorry you can't do that :(");
      return clear();
    }
    const result = a / b;
    return Number(result.toFixed(10));
  }
}

let first, operand, last;

calc.addEventListener("click", (event) => {
  if (event.target.classList.contains('numbers')) {
    if (calc.classList.contains('clear')) {
      calc.classList.remove('clear');
      clear();
    }
    result.children[resultOperand.textContent === '' ? 0 : 2].textContent += event.target.textContent;
  }
  if (event.target.classList.contains('operation')) {
    if (calc.classList.contains('clear')) {
      calc.classList.remove('clear');
    }
    if (resultLast.textContent !== '') {
      evaluate();
    }
    resultOperand.textContent = event.target.textContent;
  }
  if (event.target.classList.contains('clear')) {
    clear();
  }
  if (event.target.classList.contains('equal')) {
    if (!evaluate()) calc.classList.add('clear');
  }
});

function clear() {
  for (const child of result.children) {
    child.textContent = '';
  }
}

function evaluate() {
  for (const child of result.children) {
    if (child.textContent === '') {
      return true;
    }
  }

  const first = Number(resultFirst.textContent);
  const operand = resultOperand.textContent;
  const last = Number(resultLast.textContent);

  clear();
  resultFirst.textContent = operations[operand](first, last);
}