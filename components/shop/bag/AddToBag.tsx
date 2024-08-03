"use client";

import React from "react";
import { useBagStore } from "@/zustand";

interface AddToBagProps {
  stripePriceId: string;
}

const AddToBag: React.FC<AddToBagProps> = ({ stripePriceId }) => {
  const addToBag = useBagStore((state: any) => state.addProduct);

  const handleAddToBag = () => {
    addToBag(stripePriceId);
  };

  return <button onClick={handleAddToBag}>Add to bag</button>;
};

export default AddToBag;
