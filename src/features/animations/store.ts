import { makeAutoObservable } from "mobx";

type PositionT = "topCenter" | "right";

export enum Position {
  topCenter = "topCenter",
  right = "right",
}

class Store {
  isHide = true;
  position: PositionT = "topCenter";
  scrollPosition = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setHide() {
    this.isHide = true;
  }

  setShow() {
    this.isHide = false;
  }

  setPositon(value: PositionT) {
    this.position = value;
  }

  setScrollPosition(value: number) {
    this.scrollPosition = value;
  }
}

const store = new Store();
export default store;
