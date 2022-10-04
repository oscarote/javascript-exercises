const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((mult, current) => mult * current) : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(number) {
  let factNumber = 1;
  for (let i = 1; i <= number; i++) {
    factNumber *= i;
  }
  return factNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
