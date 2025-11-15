import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBudgetsStore = create(
  persist(
    (set, get) => ({
      budgets: [],
      addBudget: (budget) => set((state) => ({  
        budgets: [...state.budgets, budget],
      })),

      deleteBudget: (budgetId) =>
      set((state) => ({
        budgets: state.budgets.filter(
          (budget) => budget.id !== budgetId
        ),
      })),
      
      editBudget: (id, updatedBudget) => {
        set({
          budgets: get().budgets.map((budget) =>
            budget.id === id ? { ...budget, ...updatedBudget } : budget
          ),
        });
      },
    }),
    {
      name: "budgets-storage", 
      partialize: (state) => ({
        budgets: state.budgets,
      }),
    }
  )
)