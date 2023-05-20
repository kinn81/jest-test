import { calculator } from "./calculator";

test("Calculator: add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Calculator: subtract", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator: subtract", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator: divide", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Calculator: multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(4, 2)).toBe(8);
});
