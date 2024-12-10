import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      carts: [],

      addToCart: (product) =>
        set((state) => {
          const existingItemIndex = state.carts.findIndex(
            (item) => item.id === product.id
          );

          if (existingItemIndex !== -1) {
            // If the item already exists, increase its quantity by 1
            const updatedItems = [...state.carts];
            updatedItems[existingItemIndex].quantity += 1;
            console.log(updatedItems); // Check updated state
            return { carts: updatedItems };
          }

          // If the item doesn't exist in the cart, add it with a quantity of 1
          console.log([...state.carts, { ...product, quantity: 1 }]); // Check updated state
          return { carts: [...state.carts, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ carts: [] }),

      increaseQuantity: (id) =>
        set((state) => {
          const existingItemIndex = state.carts.findIndex(
            (item) => item.id === id
          );

          // If the item exists, update its quantity
          if (existingItemIndex !== -1) {
            const updatedCarts = state.carts.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { carts: updatedCarts };
          }

          // If the item does not exist, add it with a quantity of 1
          const product = { id, quantity: 1, price: /* Add product price */ 0 }; // Replace with actual product price
          return { carts: [...state.carts, product] };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const updatedCarts = state.carts
            .map((item) =>
              item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0); // Remove items with 0 quantity
          return { carts: updatedCarts };
        }),

      getTotalCost: () => {
        const { carts } = get();
        return carts.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    { name: "cart-storage" }
  )
);
