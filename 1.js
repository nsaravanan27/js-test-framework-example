const { sum, subtract } = require("./Math");

let result, expected;

result = sum(7, 3);
expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
