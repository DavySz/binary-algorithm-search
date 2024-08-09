import { sort } from "../../src/presenters";

const cases = [
  {
    input: [3, 2, 1],
    expected: [1, 2, 3],
  },
  {
    input: [1, 2, 3],
    expected: [1, 2, 3],
  },
  {
    input: [2, 1, 2],
    expected: [1, 2, 2],
  },
];

describe("sort", () => {
  it("should return a sorted list", () => {
    for (const { input, expected } of cases) {
      expect(sort(input)).toEqual(expected);
    }
  });
});
