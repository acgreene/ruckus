"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";
import { useShallow } from "zustand/react/shallow";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

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
    <div
      className={`w-full flex flex-row ${pathname === "/shop" ? "justify-end" : "justify-between"} items-center px-4 fixed z-50`}
    >
      {pathname !== "/shop" ? (
        <Link href="/shop">
          <button className="flex flex-row items-center text-2xl sm:text-4xl space-x-2">
            <FaArrowLeft />
            <span>Shop</span>
          </button>
        </Link>
      ) : (
        <></>
      )}

      <button onClick={handleNavigationToBag}>
        <span className="text-2xl sm:text-4xl">Bag ({count})</span>
      </button>
    </div>
  );
};

export default ShopHeader;
