import { createContext, ReactNode, useContext } from "react";
import { store } from "./RootStore";

const StoreContext = createContext<typeof store>(store);
//To navigate the store in our app
export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
//Created context for using the store in at all levels of our application
export const useStore = () => useContext(StoreContext);
