import React from "react";
import { featureFont } from "@/fonts";
import Products from "@/components/shop/Products";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex flex-col w-full py-12 space-y-12">
      <div
        className={`${featureFont.className} w-full sm:justify-end flex text-5xl sm:text-7xl`}
      >
        <div className="flex flex-col px-6 w-full sm:w-1/2">
          <div className="flex justify-start">
            <span>Ruckus</span>
          </div>
          <div className="flex justify-end">
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 text-2xl sm:text-4xl py-12">
        <div className="flex flex-col">
          <span>Ships in U.S.</span>
          <span>Open 24/7</span>
        </div>

        <div className="flex flex-col">
          <span>New collection</span>
          <span>Summer 2024</span>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Page;
