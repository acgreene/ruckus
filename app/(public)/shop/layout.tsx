import React, { ReactNode } from "react";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopFooter from "@/components/shop/ShopFooter";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[400px] overflow-clip">
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  );
}
