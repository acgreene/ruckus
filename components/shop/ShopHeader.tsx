"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";
import { useShallow } from "zustand/react/shallow";
import { usePathname, useRouter } from "next/navigation";

interface ShopHeaderProps {
  // Define your prop types here
}

const ShopHeader: React.FC<ShopHeaderProps> = ({}) => {
  const { count } = ShoppingBag(
    useShallow((state: any) => ({ count: state.count })),
  );

  const { products } = ShoppingBag(
    useShallow((state: any) => ({ products: state.products })),
  );

  const router = useRouter();
  const pathname = usePathname();

  function handleNavigationToBag() {
    localStorage.setItem("toBagRoute", pathname);
    router.push("/bag");
  }

  return (
    <div className="w-full flex flex-row justify-end items-center px-4 fixed">
      <button onClick={handleNavigationToBag}>
        <span className="text-2xl">Bag ({count})</span>
      </button>
    </div>
  );
};

export default ShopHeader;
