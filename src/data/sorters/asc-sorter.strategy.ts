import { SorterStrategy } from "../../domain";

export class AscSorterImpl implements SorterStrategy {
  private insertionSort(
    array: number[],
    leftIndex: number,
    rightIndex: number
  ): void {
    for (
      let currentIndex = leftIndex + 1;
      currentIndex <= rightIndex;
      currentIndex++
    ) {
      let key = array[currentIndex];
      let previousIndex = currentIndex - 1;
      while (previousIndex >= leftIndex && array[previousIndex] > key) {
        array[previousIndex + 1] = array[previousIndex];
        previousIndex--;
      }
      array[previousIndex + 1] = key;
    }
  }

  private merge(
    array: number[],
    leftIndex: number,
    middleIndex: number,
    rightIndex: number
  ): void {
    let leftLength = middleIndex - leftIndex + 1;
    let rightLength = rightIndex - middleIndex;
    let leftArray = new Array(leftLength);
    let rightArray = new Array(rightLength);

    for (let i = 0; i < leftLength; i++) {
      leftArray[i] = array[leftIndex + i];
    }
    for (let i = 0; i < rightLength; i++) {
      rightArray[i] = array[middleIndex + 1 + i];
    }

    let leftArrayIndex = 0,
      rightArrayIndex = 0,
      mergedArrayIndex = leftIndex;
    while (leftArrayIndex < leftLength && rightArrayIndex < rightLength) {
      if (leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
        array[mergedArrayIndex] = leftArray[leftArrayIndex];
        leftArrayIndex++;
      } else {
        array[mergedArrayIndex] = rightArray[rightArrayIndex];
        rightArrayIndex++;
      }
      mergedArrayIndex++;
    }

    while (leftArrayIndex < leftLength) {
      array[mergedArrayIndex] = leftArray[leftArrayIndex];
      leftArrayIndex++;
      mergedArrayIndex++;
    }

    while (rightArrayIndex < rightLength) {
      array[mergedArrayIndex] = rightArray[rightArrayIndex];
      rightArrayIndex++;
      mergedArrayIndex++;
    }
  }

  sort(list: number[]): number[] {
    const RUN_LENGTH = 32;
    let listLength = list.length;

    for (let i = 0; i < listLength; i += RUN_LENGTH) {
      this.insertionSort(list, i, Math.min(i + RUN_LENGTH - 1, listLength - 1));
    }

    for (let size = RUN_LENGTH; size < listLength; size = 2 * size) {
      for (let leftIndex = 0; leftIndex < listLength; leftIndex += 2 * size) {
        let middleIndex = Math.min(leftIndex + size - 1, listLength - 1);
        let rightIndex = Math.min(leftIndex + 2 * size - 1, listLength - 1);

        if (middleIndex < rightIndex) {
          this.merge(list, leftIndex, middleIndex, rightIndex);
        }
      }
    }

    return list;
  }
}
