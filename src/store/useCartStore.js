// src/store/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) => set((state) => {
    const existing = state.cartItems.find(i => i.id === product.id);
    if (existing) {
      return {
        cartItems: state.cartItems.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
  }),

  updateQuantity: (id, quantity) => set((state) => ({
    cartItems: state.cartItems.map(i =>
      i.id === id ? { ...i, quantity } : i
    ),
  })),

  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(i => i.id !== id),
  })),

  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
