"use client";

import React, { useState } from "react";
import { ShoppingBag } from "@/zustand";

interface AddToBagProps {
  stripePriceId: string;
}

const AddToBag: React.FC<AddToBagProps> = ({ stripePriceId }) => {
  const addToBag = ShoppingBag((state: any) => state.addProduct);

  const [added, setAdded] = useState(false);

  const handleAddToBag = () => {
    addToBag(stripePriceId);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddToBag}
      className={`${added ? "bg-blue-500 text-white" : "bg-white text-black"} transition-all duration-300 ease-in-out rounded-full px-14 py-4`}
    >
      <span>{added ? "Added" : "Add to bag"}</span>
    </button>
  );
};

export default AddToBag;
