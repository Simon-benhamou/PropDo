import { createContext, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  //States for Modal register/login page
  const [open, setOpen] = useState("");
  
  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
