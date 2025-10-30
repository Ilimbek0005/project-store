import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) => set((state) => ({ cartItems: [...state.cartItems, { ...product, quantity: 1 }] })),
  removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => ({
    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity } : item),
  })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;