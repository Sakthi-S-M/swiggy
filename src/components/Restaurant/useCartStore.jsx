import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],

  setCartItems: (items) => set({ cartItems: items }),

  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),

  removeFromCart: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),

  updateQuantity: (index, quantity) =>
    set((state) => {
      const updatedItems = [...state.cartItems];
      updatedItems[index].quantity = quantity;
      return { cartItems: updatedItems };
    }),

  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
