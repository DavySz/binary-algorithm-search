import { search } from "../../src/presenters";

const cases = [
  {
    list: [1, 2, 3, 4, 5],
    target: 3,
    expected: 2,
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 6,
    expected: -1,
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 0,
    expected: -1,
  },
];

describe("asc-sorter", () => {
  it("should find the index of target value", () => {
    for (const { list, target, expected } of cases) {
      expect(search(list, target)).toEqual(expected);
    }
  });
});
