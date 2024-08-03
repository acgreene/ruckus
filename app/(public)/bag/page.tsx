import React from "react";
import Bag from "@/components/shop/bag/Bag";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div>
      <Bag />
    </div>
  );
};

export default Page;
