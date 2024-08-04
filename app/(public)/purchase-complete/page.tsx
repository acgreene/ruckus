"use client";

import React, { useEffect } from "react";
import { ShoppingBag } from "@/zustand";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  const clearBag = ShoppingBag((state: any) => state.clear);
  useEffect(() => {
    // clear bag on page load since user just purchased what was in it
    clearBag();
  });
  return (
    <div className="w-full h-[50vh] flex flex-col justify-center items-center px-4 space-y-4">
      <span>
        Thank you for your purchase! We will have your order shipped as soon as
        possible.
      </span>
      <span>
        For questions or concerns, please reach out to contact@theruckus.live
      </span>
    </div>
  );
};

export default Page;
