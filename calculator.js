var display = document.getElementById('display');
var currentInput = '';
var operator = '';
var firstOperand = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}

function performOperation(op) {
    if (currentInput !== '') {
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }
}

function calculateResult() {
    if (operator !== '' && firstOperand !== '' && currentInput !== '') {
        var result;
        var secondOperand = currentInput;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                if (parseFloat(secondOperand) !== 0) {
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                } else {
                    result = 'Error: Division by zero';
                }
                break;
            default:
                result = 'Error';
                break;
        }

        display.value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
    }
}

