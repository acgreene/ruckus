import React from "react";
import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";
import { blockFont, featureFont } from "@/fonts";
import WireframeGlobe from "@/components/common/WireframeGlobe";

interface FooterProps {
  // Define your prop types here
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="h-[50vh] flex flex-col border-t-2 justify-between">
      <div className="flex flex-row justify-between items-center w-full p-4 sm:px-12 h-2/3">
        <div className="flex flex-col space-y-2 h-full w-1/2 justify-center items-start">
          {socialLinks.map((link, index) => (
            <Link href={link.href} target="_blank" key={index}>
              <span className="uppercase sm:text-3xl">{link.platform}</span>
            </Link>
          ))}
        </div>
        <div className="flex relative flex-col justify-center h-full w-1/2 items-center lg:flex-row-reverse">
          <div className="w-full h-2/3 justify-center items-center flex pb-24 xs:scale-[2] lg:w-1/4">
            <WireframeGlobe />
          </div>

          <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span
              className={`${blockFont.className} uppercase text-center w-full text-ruckus-yellow sm:text-2xl`}
            >
              Based in NYC
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row border-t justify-between items-center w-full h-1/3">
        <div className="text-ruckus-blue flex flex-col items-start justify-center border-r h-full w-1/2 p-2 sm:px-12 text-xxs xs:text-xs">
          <span>©2024 The Ruckus. </span>
          <span>All Rights Reserved.</span>
          <Link href="https://www.instagram.com/aleccgreene/" target="_blank">
            <span>Developed by @aleccgreene</span>
          </Link>
        </div>
        <div
          className={`${featureFont.className} uppercase flex flex-col items-end justify-center text-3xl xs:text-5xl md:text-7xl font-black h-full w-1/2 p-2 sm:px-12`}
        >
          <span>The</span>
          <span>Ruckus</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
