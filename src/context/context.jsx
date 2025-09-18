import React, { createContext, useContext, useEffect, useState} from "react";


const AppContext = createContext(); 


const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)

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
  
  useEffect(() => {
    const totalPots = pots.reduce((total, pot) => total + pot.amount, 0) 
    const inc = addedTransactions.length === 0 ? 0 : addedTransactions.filter(trans => trans.amount[0] === "+").reduce((acc, curr) => acc + Number(curr.amount.slice(1)), 0)
    const exp = addedTransactions.length === 0 ? 0 : addedTransactions.filter(trans => trans.amount[0] === "-").reduce((acc, curr) => acc + Number(curr.amount.slice(1)), 0)
    setExpenses(exp)
    setIncome(inc)
    setBalance(inc - (totalPots + exp))
  }, [addedTransactions, pots])

 
  return (
    <AppContext.Provider value={
      {
        balance, 
        setBalance,
        income, 
        setIncome,
        expenses, 
        setExpenses,
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