import React from "react";
import { featureFont } from "@/fonts";
import Menu from "@/components/common/Menu";
import Link from "next/link";

interface NavProps {
  // Define your prop types here
}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="z-50 flex fixed flex-row w-full h-20 border-b items-center justify-between">
      <div className="md:ml-8 justify-center items-center overflow-hidden relative flex w-1/2 md:w-fit">
        <Link href="/">
          <span
            className={`${featureFont.className} uppercase text-lg xs:text-2xl sm:text-4xl`}
          >
            The Ruckus
          </span>
        </Link>
      </div>
      <Menu />
    </div>
  );
};

export default Nav;
