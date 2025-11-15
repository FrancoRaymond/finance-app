import {create} from 'zustand'
import { useTransactionStore } from './transactionStore';

export const useRecurringBillsStore = create((set,get) => ({
  sortedBills: [],
  totalBills: 0,
  filteredBills: [],
  

  getBills: () => {
    const bills = useTransactionStore.getState().transactions.filter((trans) => trans.category.toLowerCase() === "bills" && trans.recurring);

    const total = bills.reduce((sum, value) => sum + Number(value.amount.slice(1)), 0);

    set({
      sortedBills: bills,
      totalBills: total,
    });
  },

  getBillStatus: (billDate) => {
    const today = new Date();
    const billDay = new Date(billDate).getDate();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), billDay);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 3) return "due";
    if (diffDays > 3 && diffDays <= 7) return "upcoming";
    if (diffDays < 0 && diffDays >= -7) return "paid";
    return "not due";
  },
   
  getPaidBills: () => {
    const { sortedBills, getBillStatus } = get();
    return sortedBills.filter((bill) => getBillStatus(bill.date) === "paid");
  },

  getUpcomingBills: () => {
    const { sortedBills, getBillStatus } = get();
    return sortedBills.filter(
      (bill) => getBillStatus(bill.date) === "upcoming"
    );
  },

  getDueSoonBills: () => {
    const { sortedBills, getBillStatus } = get();
    return sortedBills.filter((bill) => getBillStatus(bill.date) === "due");
  },

  dateSuffix: (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
  
    const dayWithZero = day.toString().padStart(2, "0");
    
    let suffix = "th";
    if (day % 10 === 1 && day !== 11) suffix = "st";
    else if (day % 10 === 2 && day !== 12) suffix = "nd";
    else if (day % 10 === 3 && day !== 13) suffix = "rd";
  
    return `${dayWithZero}${suffix}`;
  },
}))
