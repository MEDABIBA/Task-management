import { makeAutoObservable } from "mobx";
import ThemeStore from "./ThemeStore";
class RootStore {
  themeStore: ThemeStore;
  constructor() {
    makeAutoObservable(this);
    this.themeStore = new ThemeStore();
  }
}
export const store = new RootStore();
