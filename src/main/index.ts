import { makeAscSorter, makeBinarySearch } from "./factories";

const methods = {
  search: makeBinarySearch(),
  sort: makeAscSorter(),
};

export { methods };
