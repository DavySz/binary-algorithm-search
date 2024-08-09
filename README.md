## Description

The binary-algorithm-search library from npm is an implementation of the binary search algorithm. Binary search is an efficient search algorithm that finds the position of a target value within a sorted array.
Binary search works by repeatedly dividing the array in half until the target value is found or until the subarray becomes so small that the target value is known not to be in it.

## How to use

The library exports two main methods:

## Search

```bash
import { search } from 'binary-algorithm-search'

search([1, 2, 3, 4, 5], 3);  // expected return: 2

```

Signature:

```bash
search(list: number[], target: number): number

```

Params:

| Param  | Value |
| ------------- | ------------- |
| list  | Array of sorted numbers  |
| target  | Number to be found  |
| return  | Index of the target value.  |

## Sort

The search method assumes that the array passed as the first argument is already sorted for performance reasons. However, if you need to sort the array before using the search method, you can simply import the sort method and pass the list to it:

```bash
import { sort } from 'binary-algorithm-search'

sort([5, 4, 3, 2, 1]);  // expected return: [1, 2, 3, 4, 5]

```

Signature:

```bash
sort(list: number[]): number[]

```

Params:

| Param  | Value |
| ------------- | ------------- |
| list  | Array of unsorted numbers  |
| return  | Sorted list  |


---
<p align="center">Made with ❤️ by Davy de Souza</p>
