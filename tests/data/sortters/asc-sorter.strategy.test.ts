import { AscSorterImpl } from "../../../src/data/sorters";

describe("AscSorterImpl", () => {
  let sorter: AscSorterImpl;

  beforeEach(() => {
    sorter = new AscSorterImpl();
  });

  it("should sort an array of numbers in ascending order", () => {
    const array = [5, 2, 8, 1, 3];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
  });

  it("should handle an empty array", () => {
    const array: number[] = [];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array of one element", () => {
    const array = [1];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([1]);
  });

  it("should handle an array of same elements", () => {
    const array = [2, 2, 2, 2, 2];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([2, 2, 2, 2, 2]);
  });

  it("should handle an array of negative numbers", () => {
    const array = [-5, -1, -8, -3, -2];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([-8, -5, -3, -2, -1]);
  });

  it("should handle an array that is already sorted", () => {
    const array = [1, 2, 3, 4, 5];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array that is sorted in reverse order", () => {
    const array = [5, 4, 3, 2, 1];
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with more than 32 elements", () => {
    const array = Array.from({ length: 33 }, (_, i) => i);
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual(Array.from({ length: 33 }, (_, i) => i));
  });

  it("should handle an array with more than 32 elements in reverse order", () => {
    const array = Array.from({ length: 33 }, (_, i) => 33 - i);
    const sortedArray = sorter.sort(array);
    expect(sortedArray).toEqual(Array.from({ length: 33 }, (_, i) => i + 1));
  });
});
