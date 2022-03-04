import React, { useState, createContext } from "react";

export const searchContext = createContext('default');

const SearchContext = ({children}) => {
  const [input, setInput] = useState('hello');
 
  
  return ( <searchContext.Provider value={{input,setInput}}>
      {children}
    </searchContext.Provider>
  );
};
export default SearchContext;
 

