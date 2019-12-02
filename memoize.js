var assert = require('assert');

const memoize = fn => {
  const lookupTable = {};

  return function (...args) {
    const key = JSON.stringify(args);

    return lookupTable[key] || (lookupTable[key] = fn(...args));
  };
};

var slowFibonacci = (n) =>
  n < 2
    ? n
    : slowFibonacci(n - 2) + slowFibonacci(n - 1);

var fastFibonacci = memoize(function (n) {
  if (n < 2) {
    return n;
  }
  else {
    return fastFibonacci(n - 2) + fastFibonacci(n - 1);
  }
});


// assert.equal(slowFibonacci(40), 102334155);
assert.equal(fastFibonacci(40), 102334155);