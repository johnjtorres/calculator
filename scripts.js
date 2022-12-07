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

const display = document.querySelector('#display');
// TODO: prevent display content from overflowing

// Numbers
const nums = document.querySelectorAll('.num');
nums.forEach((num) =>
  num.addEventListener('click', () => {
    display.textContent += num.textContent;
  })
);

// Clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  display.textContent = '';
});
