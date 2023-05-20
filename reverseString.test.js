import { reverseString } from "./reverseString";

test("Reverse string", () => {
  expect(reverseString("word")).toBe("drow");
  expect(reverseString("WORD")).toBe("DROW");
  expect(reverseString("wOrD")).toBe("DrOw");
});
