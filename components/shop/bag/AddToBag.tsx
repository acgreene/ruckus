"use client";

import React from "react";
import { useBagStore } from "@/zustand";

interface AddToBagProps {
  // Define your prop types here
}

const AddToBag: React.FC<AddToBagProps> = ({}) => {
  const addToBag = useBagStore((state: any) => state.addProduct);

  const handleAddToBag = () => {
    addToBag("test_stripe_id");
  };

  return <button onClick={handleAddToBag}>Add to bag</button>;
};

export default AddToBag;
