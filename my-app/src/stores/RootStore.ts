import { makeAutoObservable } from "mobx";
class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
  getMessage() {
    return "hello world";
  }
}
export const store = new RootStore();
