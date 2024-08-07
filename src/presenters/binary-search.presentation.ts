export function search(list: number[], target: number): number {
  let right = list.length - 1;
  let left = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (list[middle] === target) return middle;

    if (list[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
