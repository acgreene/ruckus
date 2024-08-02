import React, { ReactNode } from "react";
import { featureFont } from "@/fonts";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <span>shop layout nav</span>
      {children}

      <span className="text-2xl">
        Created by{" "}
        <span className={`${featureFont.className}`}>The Ruckus</span> team,
        this store and signature collection celebrates our collective creativity
        and passion for music and apparel. Carefully created to the highest
        standards.
      </span>
    </div>
  );
}
