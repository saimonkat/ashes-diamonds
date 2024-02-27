import { CounterStore } from "./counter";
import { ICounter } from "./counter/counter";
import { IRoot } from "./store";

export class RootStore implements IRoot {
  counterStore: ICounter;

  constructor() {
    this.counterStore = new CounterStore();
  }
}
