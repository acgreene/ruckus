import React from "react";
import { featureFont } from "@/fonts";
import Menu from "@/components/common/Menu";

interface NavProps {
  // Define your prop types here
}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="flex w-full h-20 border-b items-center justify-between">
      <div className="ml-8 overflow-hidden relative flex">
        <span className={`${featureFont.className} uppercase text-4xl z-10`}>
          The Ruckus
        </span>
      </div>
      <Menu />
    </div>
  );
};

export default Nav;
