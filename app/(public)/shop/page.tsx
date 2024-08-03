import React from "react";
import { featureFont } from "@/fonts";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex flex-col w-full py-12 space-y-12">
      <div
        className={`${featureFont.className} flex flex-col w-full px-6 text-5xl`}
      >
        <div className="flex w-full justify-start">
          <span>Ruckus</span>
        </div>
        <div className="flex w-full justify-end">
          <span>Shop</span>
        </div>
      </div>

      <div className="flex flex-col space-y-8 text-2xl py-12">
        <div className="flex flex-col">
          <span>Ships worldwide</span>
          <span>Open 24/7</span>
        </div>

        <div className="flex flex-col">
          <span>New collection</span>
          <span>Summer 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
