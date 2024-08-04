"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";

interface RemoveFromBagProps {
  stripePriceId: string;
}

const RemoveFromBag: React.FC<RemoveFromBagProps> = ({ stripePriceId }) => {
  const removeFromBag = ShoppingBag((state: any) => state.removeAllProduct);

  const handleRemoveFromBag = () => {
    removeFromBag(stripePriceId);
  };
  return (
    <button onClick={handleRemoveFromBag}>
      <span className="text-xl sm:text-3xl">Delete</span>
    </button>
  );
};

export default RemoveFromBag;
