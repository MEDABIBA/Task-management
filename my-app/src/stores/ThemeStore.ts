import { action, makeObservable, observable } from "mobx";

type Theme = "light" | "dark";

class ThemeStore {
  @observable theme: Theme = "light";

  constructor() {
    makeObservable(this);
  }

  get getTheme() {
    return this.theme;
  }
  @action isInLocalStorage() {
    if (typeof localStorage.getItem("theme") !== null) {
      this.theme = localStorage.getItem("theme") as Theme;
    }
  }
  @action setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem("theme", theme);
  }
}

export default ThemeStore;
