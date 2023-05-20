import { caesarCipher } from "./caesarCipher";

test("Encrypt lower case", () => {
  expect(caesarCipher.encrypt("test word", 1)).toBe("uftu xpse");
});

test("Encrypt iterating past z", () => {
  expect(caesarCipher.encrypt("tesz word", 1)).toBe("ufta xpse");
});

test("Encrypt with offset = 5 passing Z", () => {
  expect(caesarCipher.encrypt("te sy", 5)).toBe("yj xd");
});

test("Encrypt lower case with special characters", () => {
  expect(caesarCipher.encrypt("test w!ord", 1)).toBe("uftu x!pse");
});
