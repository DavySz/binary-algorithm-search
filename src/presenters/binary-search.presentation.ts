import { BinarySearch, SorterStrategy } from "../domain";

export class BinarySearchImpl implements BinarySearch {
  constructor(private readonly ascSorter: SorterStrategy) {}

  execute(list: number[], target: number): number {
    const sortedList = this.ascSorter.sort(list);

    let right = sortedList.length - 1;
    let left = 0;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (sortedList[middle] === target) return middle;

      if (sortedList[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  }
}
