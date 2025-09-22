import React, { createContext, useContext, useEffect, useState, useMemo} from "react";

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


  const [sortedBills, setSortedBills] = useState(addedTransactions.filter(trans => trans.category.toLowerCase() === "bills" && trans.recurring))
  const [totalBills, setTotalBills] = useState(0)

  useEffect(() => {
    setTotalBills(sortedBills.reduce((total, value) => total + Number(value.amount.slice(1)), 0))
  }, [addedTransactions])
  
  function getBillStatus(billDate) {
    const today = new Date();
    const billDay = new Date(billDate).getDate();
    let dueDate = new Date(today.getFullYear(), today.getMonth(), billDay);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 0 && diffDays <= 3) {
      return "due"; 
    } else if (diffDays > 3 && diffDays <= 7) {
      return "upcoming"; 
    } else if (diffDays < 0 && diffDays >= -7) {
      return "paid";
    } else {
      return "not due"; 
    }
  }
  
  const paidBills = sortedBills.filter(bill => getBillStatus(bill.date) === "paid")
  const upcomingBills = sortedBills.filter(bill => getBillStatus(bill.date) === "upcoming")
  const dueSoon = sortedBills.filter(bill => getBillStatus(bill.date) === "due")

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
        setPots,
        sortedBills, 
        setSortedBills,
        totalBills, 
        setTotalBills,
        getBillStatus,
        paidBills,
        upcomingBills,
        dueSoon
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