"use client";

import React from "react";
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
  return (
    <div className="w-full h-screen justify-start items-center flex flex-col space-y-2 z-[50] relative">
      <a href={link} target="_blank" className="relative">
        <div className="relative w-full items-center flex flex-row justify-center z-[51]">
          <DynamicMarquee
            currentTranslation={0}
            speed={window.innerWidth < 768 ? 0.2 : 0.1}
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
              </div>
            }
          />
          <DynamicMarquee
            currentTranslation={-100}
            speed={window.innerWidth < 768 ? 0.2 : 0.1}
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
              </div>
            }
          />
        </div>

        <div className="flex w-full relative justify-center items-center">
          <div className="flex w-full sm:w-3/4 relative">
            <img src={img_fp} alt="" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="relative w-full items-center flex flex-row justify-center z-[51]">
          <DynamicMarquee
            currentTranslation={100}
            speed={window.innerWidth < 768 ? -0.2 : -0.1}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
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
            speed={window.innerWidth < 768 ? -0.2 : -0.1}
            color=""
            content={
              <div className="px-2 space-x-2 sm:space-x-8 flex">
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
