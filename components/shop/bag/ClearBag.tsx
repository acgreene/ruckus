"use client";

import React from "react";
import { ShoppingBag } from "@/zustand";

interface ClearBagProps {
  // Define your prop types here
}

const ClearBag: React.FC<ClearBagProps> = ({}) => {
  const clearBag = ShoppingBag((state: any) => state.clear);
  return <button onClick={clearBag}>Clear bag</button>;
};

export default ClearBag;
