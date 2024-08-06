import { makeBinarySearch } from "./../../src/main/factories/binary-search.factory";

const targets = [5, 4, 6];
const results = [4, 3, 5];
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("BinarySearchImpl", () => {
  it("should return correct index of target", () => {
    const sut = makeBinarySearch();

    for (let i = 0; i < targets.length; i++) {
      const result = sut.execute(list, targets[i]);
      expect(result).toBe(results[i]);
    }
  });

  it("should return -1 when target not exists on the list", () => {
    const sut = makeBinarySearch();
    expect(sut.execute(list, 11)).toBe(-1);
  });
});
