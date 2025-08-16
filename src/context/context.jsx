import React, { createContext, useContext, useState} from "react";

const AppContext = createContext(); 


const AppProvider = ({ children }) => {
  const [ addedTransactions, setAddedTransactions ] = useState([])
  const [budgets, setBudgets] = useState([])
  const [pots, setPots] = useState([])

  return (
    <AppContext.Provider value={
      {
        addedTransactions, 
        setAddedTransactions,
        budgets, 
        setBudgets,
        pots, 
        setPots
      }
    }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 