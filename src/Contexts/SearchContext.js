import React, { useState, createContext } from "react";

export const searchContext = createContext('default');

const SearchContext = (props) => {
  const [input, setInput] = useState('hello');
  function changeInput(value){
      setInput(value)
  }
  return (
    <searchContext.Provider value={[input,setInput]}>
      {props.children}
    </searchContext.Provider>
  );
};
export default SearchContext;
 

