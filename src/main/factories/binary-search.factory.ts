import { AscSorterImpl } from "../../data/sorters";
import { BinarySearchImpl } from "../../presenters";

export const makeBinarySearch = (): BinarySearchImpl =>
  new BinarySearchImpl(new AscSorterImpl());
