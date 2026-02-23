

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
      return "wtf man";
    }
    const result = a / b;
    return Number(result.toFixed(10));
  }
}

let first, operand, last;

calc.addEventListener("click", (event) => {
  if (event.target.classList.contains('numbers')) {
    result.children[resultOperand.textContent === '' ? 0 : 2].textContent += event.target.textContent;
  }
  if (event.target.classList.contains('operation')) {
    if (resultLast.textContent === '') {
      resultOperand.textContent = event.target.textContent;
    } else {
      evaluate();
      resultOperand.textContent = event.target.textContent;
    }
  }
  if (event.target.classList.contains('clear')) {
    clear();
  }
  if (event.target.classList.contains('equal')) {
    evaluate();
  }
});

function clear() {
  for (const child of result.children)
    child.textContent = '';
}

function evaluate() {
  for (const child of result.children) {
    if (child.textContent === '') return;
  }

  const first = Number(resultFirst.textContent);
  const operand = resultOperand.textContent;
  const last = Number(resultLast.textContent);

  clear();
  resultFirst.textContent = operations[operand](first, last);
}