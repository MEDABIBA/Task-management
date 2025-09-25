import { action, makeObservable, observable } from "mobx";

type Theme = "light" | "dark";

class ThemeStore {
  @observable theme: Theme = "light";

  constructor() {
    makeObservable(this);
  }

  get getTheme() {
    console.log(this.theme);
    return this.theme;
  }

  @action setTheme(theme: Theme) {
    this.theme = theme;
  }
}

export default ThemeStore;
