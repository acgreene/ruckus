import { create } from "zustand";
import { persist } from "zustand/middleware";

export const ShoppingBag = create(
  persist(
    (set) => ({
      count: 0,
      products: [],
      isOpen: false,
      addProduct: (stripePriceId: string) =>
        set((state: { products: string[]; count: number }) => ({
          products: [...state.products, stripePriceId],
          count: state.count + 1,
        })),
      removeAllProduct: (stripePriceId: string) =>
        set((state: { products: string[]; count: number }) => {
          const matchCount = state.products.filter(
            (p) => p === stripePriceId,
          ).length;
          return {
            products: state.products.filter((p) => p !== stripePriceId),
            count: state.count > matchCount ? state.count - matchCount : 0,
          };
        }),
      removeProduct: (stripePriceId: string) =>
        set((state: { products: string[]; count: number }) => {
          const index = state.products.findIndex((p) => p === stripePriceId);
          if (index === -1) return state; // If the product is not found, do nothing

          const newProducts = [...state.products];
          newProducts.splice(index, 1);

          return {
            products: newProducts,
            count: state.count - 1,
          };
        }),
      clear: () => set({ products: [], count: 0 }),
      isProductInBag: (stripePriceId: string) =>
        set((state: { products: string[] }) => ({
          exists: state.products.includes(stripePriceId),
        })),
    }),
    {
      name: "bag-store",
    },
  ),
);
