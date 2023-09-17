import { createContext, useReducer } from "react";
import linkReducer from "./linkReducer";
import { initialState } from "./linkReducer";

export const LinkContext = createContext();

export default function LinkProvider({ children }) {
  const [state, dispatch] = useReducer(linkReducer, initialState);

  const value = {};
  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}
