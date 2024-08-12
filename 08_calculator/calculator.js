const add = function() {
  args = Array.from(arguments);
  return args.reduce((total, val) => total + val);
};

const subtract = function() {
  args = Array.from(arguments);
  return args.reduce((total, val) => total - val);
};

const sum = function(arr) {
  return arr.reduce((total, val) => total + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, val) => total * val);
};

const power = function() {
  args = Array.from(arguments);
  return args.reduce((total, val) => total ** val);
};

const factorial = function(n) {
  fact = 1
  while(n) {
    fact *= n--
  }
  return fact;
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
