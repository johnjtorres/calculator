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

// Calculator variables
let first, second, result;

function clearInputs() {
  first = null;
  second = null;
}

function clearResult() {
  result = null;
}

function setFirst() {
  first = parseInt(display.textContent);
}

function setSecond() {
  second = parseInt(display.textContent);
}

// Display
const display = document.querySelector('#display');

function clearDisplay() {
  display.textContent = '';
}

function updateDisplay() {
  // TODO: prevent display content from overflowing
  display.textContent = result;
}

// Number buttons
const numBtns = document.querySelectorAll('.num');
numBtns.forEach((num) =>
  num.addEventListener('click', () => {
    display.textContent += num.textContent;
  })
);

// Clear button
const clearBtn = document.querySelector('#clear');

function clearAll() {
  clearDisplay();
  clearInputs();
  clearResult();
}

clearBtn.addEventListener('click', () => clearAll);
