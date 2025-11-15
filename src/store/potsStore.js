import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

export const usePotsStore = create(
  persist(
    (set, get) => ({
      pots: [],
      addPot: (pot) => set((state) => ({  
        pots: [ pot, ...state.pots],
      })),
      
      deletePot: (potId) => {
        const { pots } = get();
        const pot = pots.find((p) => p.id === potId);

        set({
          pots: pots.filter((p) => p.id !== potId),
        });

        toast.success(`${pot.name} deleted successfully`);
      },
       
      addToPot: (id, value) => {
        set({
          pots: get().pots.map((pot) =>
            pot.id === id
              ? { ...pot, amount: pot.amount + value }
              : pot
          ),
        });
      },


      editPot: (id, updatedData) => {
        set({
          pots: get().pots.map((pot) =>
            pot.id === id ? { ...pot, ...updatedData } : pot
          ),
        });
       
      },

      withdrawFromPot: (id, value) => {
        const { pots } = get();
        const pot = pots.find((p) => p.id === id);
        set({
          pots: get().pots.map((pot) => {
            if (pot.id !== id) return pot;

            const newAmount = pot.amount - value;
            return {
              ...pot,
              amount: newAmount < 0 ? 0 : newAmount, 
            };
          }),
        });
        toast.success(`R${value} withdrawn from ${pot.name}.`);
      },
    }),
    {
      name: "pots-storage", 
      partialize: (state) => ({
        pots: state.pots,
      }),
    }
  )
)