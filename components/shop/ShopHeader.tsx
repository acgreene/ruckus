"use client";

import React from "react";
import { useBagStore } from "@/zustand";
import { useShallow } from "zustand/react/shallow";

interface ShopHeaderProps {
  // Define your prop types here
}

const ShopHeader: React.FC<ShopHeaderProps> = ({}) => {
  const { count } = useBagStore(
    useShallow((state: any) => ({ count: state.count })),
  );

  const { products } = useBagStore(
    useShallow((state: any) => ({ products: state.products })),
  );

  return (
    <div className="w-full flex flex-col justify-end items-center">
      <span>Bag ({count})</span>

      <span>products in bag: </span>
      {products.map((p: string, index: number) => (
        <span key={index}>{p}</span>
      ))}
    </div>
  );
};

export default ShopHeader;
