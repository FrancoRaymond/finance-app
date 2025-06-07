import React, { createContext, useContext} from "react";

const AppContext = createContext(); 

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 
