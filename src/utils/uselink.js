import { useContext } from "react";
import { LinkContext } from "../context/LinksContext";

export const useLink = () => {
  return useContext(LinkContext);
};
