"use client";

import React from "react";
import { useBagStore } from "@/zustand";

interface RemoveFromBagProps {
  stripePriceId: string;
}

const RemoveFromBag: React.FC<RemoveFromBagProps> = ({ stripePriceId }) => {
  const removeFromBag = useBagStore((state: any) => state.removeProduct);

  const handleRemoveFromBag = () => {
    removeFromBag(stripePriceId);
  };
  return <button onClick={handleRemoveFromBag}>Remove from bag</button>;
};

export default RemoveFromBag;
