import React from "react";
import { featureFont } from "@/fonts";

interface ShopFooterProps {
  // Define your prop types here
}

const ShopFooter: React.FC<ShopFooterProps> = ({}) => {
  return (
    <div className="sm:w-[500px] md:w-[750px]">
      <span className="text-2xl">
        Created by{" "}
        <span className={`${featureFont.className}`}>The Ruckus</span> team,
        this store and signature collection celebrates our collective creativity
        and passion for music and apparel. Carefully created to the highest
        standards.
      </span>
    </div>
  );
};

export default ShopFooter;
