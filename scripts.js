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

// Nums and result
let num1, num2, result;

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
function clearOperands() {
  num1 = null;
  num2 = null;
}
function clearOperator() {
  curOp = null;
}
function clearAll() {
  clearDisplay();
  clearOperands();
  clearOperator();
}
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);

// Operators
let curOp;
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>
  operator.addEventListener('click', () => {
    needsCleared = true;
    num1 = parseInt(display.textContent);
    curOp = operator.textContent;
    console.log(curOp);
  })
);

// Equal
const equals = document.querySelector('#equal');
equals.addEventListener('click', () => {
  if (!(curOp && num1 && num2)) return;
  num2 = parseInt(display.textContent);
  result = operate(curOp, num1, num2);
  display.textContent = result;
});
