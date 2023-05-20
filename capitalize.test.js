import { capitalize } from "./capitalize";

test("Capitalize string", () => {
  expect(capitalize("word")).toBe("Word");
  expect(capitalize("WORD")).toBe("Word");
  expect(capitalize("wOrD")).toBe("Word");
});
