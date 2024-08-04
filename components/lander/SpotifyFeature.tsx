"use client";

import React, { useEffect, useState } from "react";
import { blockFont } from "@/fonts";
import DynamicMarquee from "@/components/common/DynamicMarquee";

interface SpotifyFeatureProps {
  img_fp: string;
  title: string;
  link: string;
}

const SpotifyFeature: React.FC<SpotifyFeatureProps> = ({
  img_fp,
  link,
  title,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    // Set speed on mount
    updateWindowWidth();

    // Update speed on resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  return (
    <div className="w-full h-screen justify-start items-center flex flex-col space-y-2 z-[50] relative">
      <a href={link} target="_blank" className="relative">
        <div className="relative w-full items-center flex flex-row justify-center z-[51]">
          <DynamicMarquee
            currentTranslation={0}
            speed={windowWidth < 768 ? 0.1 : 0.05}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
              </div>
            }
          />
          <DynamicMarquee
            currentTranslation={-100}
            speed={windowWidth < 768 ? 0.1 : 0.05}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  Stream
                </span>
              </div>
            }
          />
        </div>

        <div className="flex w-full relative justify-center items-center">
          <div className="flex w-full sm:w-2/3 md:w-1/2 relative">
            <img src={img_fp} alt="" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="relative w-full items-center flex flex-row justify-center z-[51]">
          <DynamicMarquee
            currentTranslation={100}
            speed={windowWidth < 768 ? -0.1 : -0.05}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  {title}
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  {title}
                </span>
              </div>
            }
          />
          <DynamicMarquee
            currentTranslation={0}
            speed={windowWidth < 768 ? -0.1 : -0.05}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  {title}
                </span>
                <span
                  className={`${blockFont.className} uppercase text-3xl sm:text-7xl`}
                >
                  {title}
                </span>
              </div>
            }
          />
        </div>
      </a>
    </div>
  );
};

export default SpotifyFeature;
