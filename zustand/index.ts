import { create } from "zustand";

export const useBagStore = create((set) => ({
  count: 0,
  products: [],
  addProduct: (stripePriceId: string) =>
    set((state: { products: string[]; count: number }) => ({
      products: [...state.products, stripePriceId],
      count: state.count + 1,
    })),
  removeProduct: (stripePriceId: string) =>
    set((state: { products: string[]; count: number }) => {
      const matchCount = state.products.filter(
        (p) => p === stripePriceId,
      ).length;
      return {
        products: state.products.filter((p) => p !== stripePriceId),
        count: state.count > matchCount ? state.count - matchCount : 0,
      };
    }),
  clear: () => set({ products: [], count: 0 }),
  isProductInBag: (stripePriceId: string) =>
    set((state: { products: string[] }) => ({
      exists: state.products.includes(stripePriceId),
    })),
}));
