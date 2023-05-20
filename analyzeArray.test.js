import { analyzeArray } from "./analyzeArray";

test("Average", () => {
  expect(analyzeArray([5, 3, 7]).avg).toBe(5);
});

test("Minimum", () => {
  expect(analyzeArray([5, 3, 7]).min).toBe(3);
});

test("Maximum", () => {
  expect(analyzeArray([5, 7, 1]).max).toBe(7);
});

test("Length", () => {
  expect(analyzeArray([5, 7, 1]).length).toBe(3);
});
