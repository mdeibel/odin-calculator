function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

function createOperation() {
    if (currentNumber) {
        previousNumber = currentNumber;
    }
    if (document.querySelector('.display').innerText) {
        currentNumber = document.querySelector('.display').innerText;
    }
    if (currentOperator && previousNumber && currentNumber) {
        document.querySelector('.display').innerText =
            operate(window[currentOperator], previousNumber, currentNumber)
        previousNumber = currentNumber;
        currentNumber = document.querySelector('.display').innerText;
    }
}

let currentNumber;
let previousNumber;
let currentOperator;
let isOperating = false;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (isOperating) {
            document.querySelector('.display').innerText =
                e.currentTarget.innerText;
            isOperating = false;
        }
        else {
            document.querySelector('.display').innerText +=
                e.currentTarget.innerText;
        }
    });
});

const operatorButtons = document.querySelectorAll('.operators button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (!isOperating) {
            createOperation();
            isOperating = true;
        }
        currentOperator = e.currentTarget.id;
    });
})

const operateButton = document.querySelector('.operate');
operateButton.addEventListener('click', e => {
    if (!isOperating) {
        createOperation();
        currentOperator = undefined;
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', e => {
    currentNumber = undefined;
    previousNumber = undefined;
    currentOperator = undefined;
    document.querySelector('.display').innerText = '';
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', e => {
    if (document.querySelector('.display').innerText.includes('.') && 
            !isOperating) {
        return;
    }
    if (isOperating) {
        document.querySelector('.display').innerText =
            e.currentTarget.innerText;
        isOperating = false;
    }
    else {
        document.querySelector('.display').innerText +=
            e.currentTarget.innerText;
    }
});