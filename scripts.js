'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

// Display
let needsCleared = false;
const display = document.querySelector('#display');
// TODO: prevent display content from overflowing

// Numbers
const nums = document.querySelectorAll('.num');
nums.forEach((num) =>
  num.addEventListener('click', () => {
    if (needsCleared) {
      clearDisplay();
      needsCleared = false;
    }
    if (!display.textContent && num.textContent === '0') return;
    display.textContent += num.textContent;
  })
);

// Clear
function clearDisplay() {
  display.textContent = '';
}
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

// Operators
let curOp;
const operands = [];
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>
  operator.addEventListener('click', () => {
    needsCleared = true;
    operands[0] = parseInt(display.textContent);
    curOp = operator.textContent;
    console.log(curOp);
  })
);
