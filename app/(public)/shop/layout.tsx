import React, { ReactNode } from "react";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopFooter from "@/components/shop/ShopFooter";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <ShopHeader />
      <div className="px-4 w-full">
        {children}
        <div className="w-full justify-center items-center flex pb-12">
          <ShopFooter />
        </div>
      </div>
    </div>
  );
}
