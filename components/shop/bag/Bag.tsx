"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "@/zustand";
import { RiCloseLargeLine } from "react-icons/ri";
import { useShallow } from "zustand/react/shallow";
import RemoveFromBag from "@/components/shop/bag/RemoveFromBag";
import Link from "next/link";

interface BagProps {
  // Define your prop types here
}

const Bag: React.FC<BagProps> = ({}) => {
  const { products } = ShoppingBag(
    useShallow((state: any) => ({ products: state.products })),
  );

  const [fromPath, setFromPath] = useState<any>("");

  useEffect(() => {
    const val = localStorage.getItem("toBagRoute");
    setFromPath(val);
  }, []);

  return (
    <div
      className={`absolute flex flex-col justify-start items-center bg-white text-black pt-20 px-4 top-0 left-0 w-screen min-h-screen z-50`}
    >
      <Link href={fromPath as string}>
        <div className="text-2xl absolute right-6 top-6 flex flex-col justify-center items-end font-medium">
          <span>Close</span>
          <RiCloseLargeLine />
        </div>
      </Link>
      <div className="w-full space-y-4">
        {/*TODO: fetch products from stripe using priceId strings here*/}
        {products.length > 0 ? (
          <>
            {products.map((p: string, index: number) => (
              <div key={index} className="flex flex-col bg-red-200 h-96">
                <div className="flex flex-row">
                  <div className="w-2/3">
                    <span>{p}</span>
                  </div>
                  <div className="w-1/3">
                    <RemoveFromBag stripePriceId={p} />
                  </div>
                </div>
                <div className="flex flex-row"></div>
              </div>
            ))}
          </>
        ) : (
          <div className="w-full flex justify-center items-center pt-8 pb-40">
            <span className="text-3xl">The bag is empty</span>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-4 justify-center items-center w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="text-2xl">Subtotal</span>
          <span className="text-2xl">$0.00 USD</span>
        </div>
        <div className="flex justify-start items-center">
          <span className="text-base">
            Taxes and shipping will be calculated at checkout
          </span>
        </div>
        <div>
          <button className="text-white bg-black rounded-full px-14 py-4">
            <span className="text-3xl">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
