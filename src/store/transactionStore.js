import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTransactionStore = create(
  persist(
    (set, get) => ({
      transactions: [],
      filteredTransactions: [],

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),

      deleteTransaction: (transactionId) =>
        set((state) => ({
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== transactionId
        ),
       })),

      sortTransactions: ( searchTerm, categoryFilter, sortType ) => {
        const { transactions } = get();
        let result = [...transactions];

        if (searchTerm) {
          result = result.filter((trans) =>
            trans.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          );
        }

        if (categoryFilter !== "all" && categoryFilter !== "") {
          result = result.filter((trans) => trans.category === categoryFilter);
        }

        switch (sortType) {
          case "Latest":
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
          case "Oldest":
            result.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
          case "A-Z":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Z-A":
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case "Highest":
            result.sort((a, b) => b.amount - a.amount);
            break;
          case "Lowest":
            result.sort((a, b) => a.amount - b.amount);
            break;
        }

        set({ filteredTransactions: result });
      },
    }),
    {
      name: "transaction-storage",
      partialize: (state) => ({
        transactions: state.transactions,
      }),
    }
  )
);