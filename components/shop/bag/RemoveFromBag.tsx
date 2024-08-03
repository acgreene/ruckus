"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";

interface RemoveFromBagProps {
  stripePriceId: string;
}

const RemoveFromBag: React.FC<RemoveFromBagProps> = ({ stripePriceId }) => {
  const removeFromBag = ShoppingBag((state: any) => state.removeProduct);

  const handleRemoveFromBag = () => {
    removeFromBag(stripePriceId);
  };
  return (
    <button onClick={handleRemoveFromBag}>
      <span>Delete</span>
    </button>
  );
};

export default RemoveFromBag;
