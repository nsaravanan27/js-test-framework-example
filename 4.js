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

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

test("add method", () => {
  const result = sum(7, 3);
  const expected = -10;

  assert(result).toBe(expected);
});

test("subtract method", () => {
  const result = subtract(7, 3);
  const expected = 4;

  assert(result).toBe(expected);
});
