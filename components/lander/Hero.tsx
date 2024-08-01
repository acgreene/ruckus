"use client";
import React, { useEffect, useState } from "react";
import Marquee from "@/components/common/Marquee";
import PhotoIanEli from "@/components/photos/PhotoIanEli";
import PhotoAdam from "@/components/photos/PhotoAdam";
import PhotoSteph from "@/components/photos/PhotoSteph";
import PhotoHorns from "@/components/photos/PhotoHorns";
import Link from "next/link";
import { spotify } from "@/constants/socialLinks";
import { blockFont } from "@/fonts";

interface HeroProps {
  // Define your prop types here
}

const Hero: React.FC<HeroProps> = ({}) => {
  const [speed, setSpeed] = useState(24);

  useEffect(() => {
    const updateSpeed = () => {
      if (typeof window !== "undefined") {
        setSpeed(window.innerWidth < 500 ? 8 : 24);
      }
    };

    // Set speed on mount
    updateSpeed();

    // Update speed on resize
    window.addEventListener("resize", updateSpeed);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        className={`${blockFont.className} w-full h-full flex top-[48%] absolute rotate-[-3deg] scale-125 z-20`}
      >
        <Marquee
          element={
            <div className="flex px-8 border-t-ruckus-yellow border-t-4">
              <span className="uppercase font-extrabold text-6xl sm:text-9xl text-ruckus-brown opacity-90">
                Ruckus
              </span>
            </div>
          }
          speed={speed}
          direction={true}
        />
      </div>
      <div
        className={`${blockFont.className} w-full h-full flex top-[49%] absolute rotate-[-3deg] scale-125 z-20`}
      >
        <Marquee
          element={
            <div className="flex px-8">
              <span className="uppercase font-extrabold text-6xl sm:text-9xl text-ruckus-orange opacity-80">
                Ruckus
              </span>
            </div>
          }
          speed={speed}
          direction={true}
        />
      </div>
      <div
        className={`${blockFont.className} w-full h-full flex top-[50%] absolute rotate-[-3deg] scale-125 z-20`}
      >
        <Marquee
          element={
            <div className="flex px-8 border-b-ruckus-yellow border-b-4">
              <span className="uppercase font-extrabold text-6xl sm:text-9xl text-ruckus-yellow">
                Ruckus
              </span>
            </div>
          }
          speed={speed}
          direction={true}
        />
      </div>

      <div className="h-[300px] sm:h-[380px] overflow-clip w-full flex relative">
        <PhotoHorns />
        <PhotoSteph />
        <PhotoIanEli />
        <PhotoAdam />
      </div>

      <div className="absolute top-[60%] left-[5%] z-30">
        <Link href="/shows">
          <div className="border-2 border-ruckus-yellow bg-black bg-opacity-60 rounded-xl p-1">
            <span className="uppercase font-extrabold text-white text-xs xs:text-sm sm:text-3xl">
              Show Dates
            </span>
          </div>
        </Link>
      </div>
      <div className="absolute top-[60%] left-[50%] -translate-x-1/2 z-30">
        <a href={spotify.href} target="_blank">
          <div className="border-2 border-ruckus-purple bg-black bg-opacity-60 rounded-xl p-1">
            <span className="uppercase font-extrabold text-white text-xs xs:text-sm sm:text-3xl">
              Stream
            </span>
          </div>
        </a>
      </div>
      <div className="absolute top-[60%] right-[5%] z-30">
        <Link href="/shop">
          <div className="border-2 border-ruckus-blue bg-black bg-opacity-60 rounded-xl p-1 px-[27px] xs:px-[30px]">
            <span className="uppercase font-extrabold text-white text-xs xs:text-sm sm:text-3xl">
              Shop
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
