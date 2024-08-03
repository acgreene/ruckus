"use client";

import React from "react";
import { useBagStore } from "@/zustand";

interface RemoveFromBagProps {
  // Define your prop types here
}

const RemoveFromBag: React.FC<RemoveFromBagProps> = ({}) => {
  const removeFromBag = useBagStore((state: any) => state.removeProduct);

  const handleRemoveFromBag = () => {
    removeFromBag("test_stripe_id");
  };
  return <button onClick={handleRemoveFromBag}>Remove from bag</button>;
};

export default RemoveFromBag;
