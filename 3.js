const { sum, subtract } = require("./Math");

function assert(result) {
  return {
    toBe(expected) {
      if (result != expected) {
        throw new Error(`${result} != ${expected}`);
      }
    },
  };
}

let result, expected;

result = sum(3, 7);
expected = 10;

assert(result).toBe(expected);

result = subtract(3, 7);
expected = -2;

assert(result).toBe(expected);
