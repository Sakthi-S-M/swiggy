import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { data } from "../data/Mockdata";
const getUserId = () => {
  const username = localStorage.getItem("username");
  return username;
};
const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      RestaurantItems: [],
      getUserId: () => getUserId(),
      total: 0,
      setTotal: (total) => set({ total: total }),
      setCartItems: (items) => set({ cartItems: items }),
      setRestaurantItems: (items) => set({ RestaurantItems: items }),
      addToCart: (item) => {
        const userId = getUserId();
        const storedCartItems = localStorage.getItem(`cartItems_${userId}`);
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        const updatedCartItems = [...cartItems, item];
        localStorage.setItem(
          `cartItems_${userId}`,
          JSON.stringify(updatedCartItems)
        );
        set({ cartItems: updatedCartItems });
      },

      removeFromCart: (index) => {
        const userId = getUserId();
        const storedCartItems = localStorage.getItem(`cartItems_${userId}`);
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        localStorage.setItem(
          `cartItems_${userId}`,
          JSON.stringify(updatedCartItems)
        );
        set({ cartItems: updatedCartItems });
      },

      updateQuantity: (index, quantity) => {
        const userId = getUserId();
        const storedCartItems = localStorage.getItem(`cartItems_${userId}`);
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        cartItems[index].quantity = quantity;
        localStorage.setItem(`cartItems_${userId}`, JSON.stringify(cartItems));
        set({ cartItems });
      },

      clearCart: () => {
        const userId = getUserId();
        localStorage.removeItem(`cartItems_${userId}`);
        set({ cartItems: [] });
      },
      data: data,
      setData: (data) => set({ data }),
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const setItemsBasedOnRestaurant = (hotelId) => {
  sessionStorage.setItem("Hotelid", hotelId);
  const restaurant = useCartStore
    .getState()
    .data.find((restaurant) => restaurant.id === parseInt(hotelId));
  console.log("~! restaurant", restaurant);
  if (restaurant) {
    useCartStore.getState().setRestaurantItems(restaurant.items);
  }
};
export { useCartStore, setItemsBasedOnRestaurant };
