import React, { createContext, useContext, useState} from "react";

const AppContext = createContext(); 


const AppProvider = ({ children }) => {
  const [value, setValue] = useState('')

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 
