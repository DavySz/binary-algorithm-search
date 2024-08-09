export function insertionSorter(
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
