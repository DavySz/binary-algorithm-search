import { Sorters } from "./helpers/sorters";

export function sort(list: number[]): number[] {
  const RUN_LENGTH = 32;
  let listLength = list.length;
  const sorter = new Sorters();

  for (let i = 0; i < listLength; i += RUN_LENGTH) {
    sorter.insertionSort(list, i, Math.min(i + RUN_LENGTH - 1, listLength - 1));
  }

  for (let size = RUN_LENGTH; size < listLength; size = 2 * size) {
    for (let leftIndex = 0; leftIndex < listLength; leftIndex += 2 * size) {
      let middleIndex = Math.min(leftIndex + size - 1, listLength - 1);
      let rightIndex = Math.min(leftIndex + 2 * size - 1, listLength - 1);

      if (middleIndex < rightIndex) {
        sorter.merge(list, leftIndex, middleIndex, rightIndex);
      }
    }
  }

  return list;
}
