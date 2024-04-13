let result = 0;

function add(a, b) {
  result = a + b;
}

function subtract(a, b) {
  result = a - b;
}

export function addNumbers(a, b) {
  add(a, b);
}

export function subtractNumbers(a, b) {
  subtract(a, b);
}

export function getResult() {
  return result;
}
