"use strict";

const getInputValue = () => {
    return document.querySelector('#value');
};

const getOperands = (operand) => {
    switch (operand) {
        case 'x':
            concatNumber('*');
            break;

        case '/':
            concatNumber('/');
            break;

        case '%':
            concatNumber('%');
            break;

        case '-':
            concatNumber('-');
            break;

        case '+':
            concatNumber('+');
            break;

        case '(':
            concatNumber('(');
            break;

        case ')':
            concatNumber(')');
            break;
    }
};

const getOperation = (operand) => {
    switch (operand) {
        case 'oneDivideByn':
            document.querySelector('#answers').innerHTML = (1 / (getInputValue().value));
            getInputValue().value = `1/(${(getInputValue().value)})`;
            break;

        case 'raiseToPower':
            document.querySelector('#answers').innerHTML = getInputValue().value *= getInputValue().value;
            getInputValue().value = `sqrt(${(getInputValue().value)})`;
            break;

        case 'sqrtOfn':
            document.querySelector('#answers').innerHTML = Math.sqrt(getInputValue().value).toString();
            getInputValue().value = `sqrt(${(getInputValue().value)})`;
            break;
    }
};

const concatNumber = (num) => {
    let x;
    let y;

    y = getInputValue().value.substr(getInputValue().selectionEnd, getInputValue().value.length);
    x = getInputValue().value.substr(0, getInputValue().selectionEnd);
    getInputValue().value = x.concat(num.concat(y));
    getInputValue().setSelectionRange(x.length + 1, x.length +1);
};

const getNumber = (number) => {

    switch (number) {
        case 1:
            concatNumber('1');
            break;

        case 2:
            concatNumber('2');
            break;

        case 3:
            concatNumber('3');
            break;

        case 4:
            concatNumber('4');
            break;

        case 5:
            concatNumber('5');
            break;

        case 6:
            concatNumber('6');
            break;

        case 7:
            concatNumber('7');
            break;

        case 8:
            concatNumber('8');
            break;

        case 9:
            concatNumber('9');
            break;

        case 0:
            concatNumber('0');
            break;

        case '.':
            concatNumber('.');
            break;
    }
};

const resetCalc = () => {
    document.querySelector('#value').value = '';
    document.querySelector('#answers').innerHTML = '';
};

const runOperation = () => {
    document.querySelector('#answers').innerHTML = eval(getInputValue().value);
};

const removeLastDigit = () => {
    let x = getInputValue().value;
    let y;

    if (getInputValue().selectionStart > 0) {
        y = x.substr(getInputValue().selectionEnd, getInputValue().value.length);
        x = x.substr(0, getInputValue().selectionEnd - 1);
        getInputValue().value = x.concat(y);
        getInputValue().setSelectionRange(x.length, x.length);
    }
};

document.querySelectorAll('.container ul li a').forEach((item) => {
    item.addEventListener('mousedown', (e)=> {
        e.preventDefault();
        item.classList.add('click');
    });

    item.addEventListener('mouseup', (e)=> {
        e.preventDefault();
        item.classList.remove('click');
    });
});

const checkIfDigit = () => {
    if (getInputValue().value.match(/^[0-9.+*\-()/%]+$/)) {
        runOperation();
    }
};

getInputValue().addEventListener('keydown', checkIfDigit);