"use client";
import React from "react";
import Marquee from "@/components/common/Marquee";
import PhotoIanEli from "@/components/photos/PhotoIanEli";
import PhotoAdam from "@/components/photos/PhotoAdam";
import PhotoSteph from "@/components/photos/PhotoSteph";
import PhotoHorns from "@/components/photos/PhotoHorns";

interface HeroProps {
  // Define your prop types here
}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full h-full flex top-[48%] absolute rotate-[-3deg] scale-125 z-20">
        <Marquee
          element={
            <div className="flex px-8">
              <span className="uppercase font-extrabold text-9xl text-ruckus-brown opacity-90">
                Ruckus
              </span>
            </div>
          }
          speed={24}
          direction={true}
        />
      </div>
      <div className="w-full h-full flex top-[49%] absolute rotate-[-3deg] scale-125 z-20">
        <Marquee
          element={
            <div className="flex px-8">
              <span className="uppercase font-extrabold text-9xl text-ruckus-orange opacity-80">
                Ruckus
              </span>
            </div>
          }
          speed={24}
          direction={true}
        />
      </div>
      <div className="w-full h-full flex top-[50%] absolute rotate-[-3deg] scale-125 z-20">
        <Marquee
          element={
            <div className="flex px-8">
              <span className="uppercase font-extrabold text-9xl text-ruckus-yellow">
                Ruckus
              </span>
            </div>
          }
          speed={24}
          direction={true}
        />
      </div>

      <div className="h-[380px] overflow-clip w-full flex relative">
        <PhotoHorns />
        <PhotoSteph />
        <PhotoIanEli />
        <PhotoAdam />
      </div>
    </div>
  );
};

export default Hero;
