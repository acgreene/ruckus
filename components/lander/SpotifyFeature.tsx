"use client";

import React from "react";
import { blockFont } from "@/fonts";
import { useScrollPosition } from "@/hooks";

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
  const scrollPosition = useScrollPosition();

  return (
    <div className="w-full h-screen justify-start items-center flex flex-col space-y-2 z-[50] relative">
      <a href={link} target="_blank" className="relative">
        <div
          className="flex w-full flex-row space-x-4 justify-start items-center z-[51] relative"
          style={{
            transform: `translate(${scrollPosition / 300}px, ${scrollPosition / 10}px)`,
          }}
        >
          <span className={`${blockFont.className} uppercase text-3xl`}>
            Stream
          </span>
        </div>

        <div
          className="flex w-full relative"
          style={{
            transform: `translate(-${scrollPosition / 200}px, ${scrollPosition / 40}px)`,
          }}
        >
          <img src={img_fp} alt="" className="h-full w-full object-contain" />
        </div>

        <div
          className="flex w-full justify-end items-center z-[51] relative"
          style={{
            transform: `translate(-${scrollPosition / 300}px, -${scrollPosition / 15}px)`,
          }}
        >
          <span
            className={`${blockFont.className} uppercase text-3xl w-2/3 text-end`}
          >
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default SpotifyFeature;
