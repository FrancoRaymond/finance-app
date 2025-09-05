import React, { createContext, useContext, useEffect, useState} from "react";


const AppContext = createContext(); 


const AppProvider = ({ children }) => {

//TRANSACTIONS LOCAL STORAGE

  const [ addedTransactions, setAddedTransactions ] = useState(() => {
    const storedTransactions = localStorage.getItem("addedTransactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  })
  useEffect(() => {
    localStorage.setItem("addedTransactions", JSON.stringify(addedTransactions))
  }, [addedTransactions])

  //BUDGETS LOCAL STORAGE

  const [budgets, setBudgets] = useState(() => {
    const storedBudgets = localStorage.getItem("budgets");
    return storedBudgets ? JSON.parse(storedBudgets) : [];
  })
  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets))
  }, [budgets])

//POTS LOCAL STORAGE
  const [pots, setPots] = useState(() => {
    const storedPots = localStorage.getItem("pots");
    return storedPots ? JSON.parse(storedPots) : [];
  })
  useEffect(() => {
    localStorage.setItem("pots", JSON.stringify(pots))
  }, [pots])

  //localStorage.removeItem('pots')
 

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