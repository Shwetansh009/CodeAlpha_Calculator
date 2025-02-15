document.addEventListener('keydown', function(event) {
    const inputbox = document.getElementById('inputbox');
    const key = event.key;
    const operators = ['+', '-', '*', '/', '%'];

    if (!isNaN(key) || key === '.') {
      inputbox.value += key;
    } else if (operators.includes(key)) {
      inputbox.value += ` ${key} `;
    } else if (key === 'Enter') {
      try {
        inputbox.value = eval(inputbox.value);
      } catch {
        inputBox.value = 'Error';
      }
    } else if (key === 'Backspace') {
      inputbox.value = inputbox.value.slice(0, -1);
    } else if (key === 'Escape') {
      inputBox.value = '';
    }
  });

const inputbox = document.getElementById('inputbox');

function clearInput() {
inputbox.value = '';
}

function deleteLast() {
inputbox.value = inputbox.value.slice(0, -1);
}
function appendNumber(number) {
inputbox.value += number;
}

function appendOperator(operator) {
inputbox.value += operator;
}

function appendDot() {
if (!inputbox.value.includes('.')) {
  inputBox.value += '.';
}
}

function calculateResult() {
try {
  inputbox.value = eval(inputbox.value);
} catch (error) {
  inputbox.value = 'Error';
}
}
