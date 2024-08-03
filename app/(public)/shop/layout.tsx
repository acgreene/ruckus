import React, { ReactNode } from "react";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopFooter from "@/components/shop/ShopFooter";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  );
}
