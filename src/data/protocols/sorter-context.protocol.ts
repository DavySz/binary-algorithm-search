import { SorterStrategy } from "../../domain";

export interface SorterContextProtocol {
  setStrategy: (strategy: SorterStrategy) => void;
  execute: (list: number[]) => number[];
}
