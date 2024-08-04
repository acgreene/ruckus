"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";

interface AddToBagProps {
  stripePriceId: string;
}

const AddToBag: React.FC<AddToBagProps> = ({ stripePriceId }) => {
  const addToBag = ShoppingBag((state: any) => state.addProduct);

  const handleAddToBag = () => {
    addToBag(stripePriceId);
  };

  return (
    <button
      onClick={handleAddToBag}
      className="bg-white text-black rounded-full px-14 py-4"
    >
      <span>Add to bag</span>
    </button>
  );
};

export default AddToBag;
