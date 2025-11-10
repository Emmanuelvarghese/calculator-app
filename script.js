const resultInput = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    resultInput.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    resultInput.value = expression;
}

function clearResult() {
    expression = '';
    resultInput.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    resultInput.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        resultInput.value = result;
        expression = result.toString();
    } catch (error) {
        resultInput.value = 'Error';
        expression = '';
    }
}