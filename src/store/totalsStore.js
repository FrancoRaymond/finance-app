import { create } from 'zustand'
import { useTransactionStore } from './transactionStore';
import { usePotsStore } from './potsStore';


export const useTotalsStore = create((set) => ({  
  income: 0,
  expenses: 0,
  balance: 0,

  calculateTotals: () => {
    const transactions = useTransactionStore.getState().transactions
    const pots = usePotsStore.getState().pots

    const totalPots = pots.reduce((total, pot) => total + pot.amount, 0) 

    const income = transactions.length === 0 ? 0 : transactions
    .filter(trans => trans.amount[0] === "+")
    .reduce((acc, curr) => acc + Number(curr.amount.slice(1)), 0)

    const expenses = transactions.length === 0 ? 0 : transactions
    .filter(trans => trans.amount[0] === "-")
    .reduce((acc, curr) => acc + Number(curr.amount.slice(1)), 0)
    
    const balance = income - (totalPots + expenses);

    set({ income, expenses, balance });
  },
}))