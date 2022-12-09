const assert = require("assert");
const { sum, subtract } = require("./Math");

let result, expected;

result = sum(3, 7);
expected = 10;

assert.strictEqual(result, expected);

result = subtract(3, 7);
expected = -4;

assert.strictEqual(result, expected);
