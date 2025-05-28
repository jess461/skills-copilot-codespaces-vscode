import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(item => item.id !== itemId)
  })),
  updateQuantity: (itemId, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    )
  })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;