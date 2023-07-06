import create from "zustand";

const useCartStore = create((set) => ({
  totalAmount: 0,
  updateTotalAmount: (amount) => set((state) => ({ totalAmount: amount })),
}));

export default useCartStore;
