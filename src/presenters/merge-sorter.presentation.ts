function mergeSorter(
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
