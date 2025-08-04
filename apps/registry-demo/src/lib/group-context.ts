import { createContext, useContext } from "react";

export type GroupContextValue = {
  isSuffix?: boolean;
  isPrefix?: boolean;
};

const groupContext = createContext<GroupContextValue>({});
export const GroupContextProvider = groupContext.Provider;
export const useGroupContext = () => {
  const context = useContext(groupContext);
  if (!context) {
    throw new Error(
      "useGroupContext must be used within a GroupContextProvider"
    );
  }
  return context;
};
