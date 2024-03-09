let display = document.getElementById('display');
let expression = '0';

function appendToDisplay(value) {
  if (expression === '0' && !isNaN(value)) {
    expression = value;
  } else {
    expression += value;
  }
  display.textContent = expression;
}

function resetDisplay() {
  expression = '0';
  display.textContent = expression;
}

function deleteLast() {
  expression = expression.slice(0, -1);
  if (expression === '') {
    expression = '0';
  }
  display.textContent = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.textContent = result;
    expression = result.toString();
  } catch (error) {
    display.textContent = 'Error';
    expression = '0';
  }
}



