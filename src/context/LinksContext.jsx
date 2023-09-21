import { createContext, useReducer } from "react";

import linkReducer from "./linkReducer";
import { initialState } from "./linkReducer";

export const LinkContext = createContext();

export default function LinkProvider({ children }) {
  const [{ links, profile }, dispatch] = useReducer(linkReducer, initialState);

  return (
    <LinkContext.Provider value={{ links, dispatch, profile }}>
      {children}
    </LinkContext.Provider>
  );
}
