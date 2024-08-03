"use client";
import React, { useEffect, useState } from "react";
import Marquee from "@/components/common/Marquee";
import PhotoIanEli from "@/components/photos/PhotoIanEli";
import PhotoAdam from "@/components/photos/PhotoAdam";
import PhotoSteph from "@/components/photos/PhotoSteph";
import PhotoHorns from "@/components/photos/PhotoHorns";
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
    <div className="h-screen w-full flex justify-center items-center relative">
      <div
        className={`${blockFont.className} w-full h-full flex top-[34%] absolute rotate-[-3deg] scale-125 z-20`}
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
        className={`${blockFont.className} w-full h-full flex top-[35%] absolute rotate-[-3deg] scale-125 z-20`}
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
        className={`${blockFont.className} w-full h-full flex top-[36%] absolute rotate-[-3deg] scale-125 z-20`}
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

      <div className="absolute top-[5%] h-[300px] sm:h-[380px] overflow-clip w-full flex">
        <PhotoHorns />
        <PhotoSteph />
        <PhotoIanEli />
        <PhotoAdam />
      </div>

      {/*<div className="w-full absolute top-[40%] left-[50%] -translate-x-1/2 flex flex-col z-30 bg-black bg-opacity-75">*/}
      {/*  <div className="z-30 w-full flex justify-start">*/}
      {/*    <Link href="/shows">*/}
      {/*      <div className="p-1 w-fit">*/}
      {/*        <span*/}
      {/*          className={`${blockFont.className} uppercase text-white text-3xl xs:text-sm sm:text-3xl`}*/}
      {/*        >*/}
      {/*          Show Dates*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  <div className="z-30 w-full flex justify-start">*/}
      {/*    <Link href={spotify.href}>*/}
      {/*      <div className="p-1 w-fit">*/}
      {/*        <span*/}
      {/*          className={`${blockFont.className} uppercase text-white text-3xl xs:text-sm sm:text-3xl`}*/}
      {/*        >*/}
      {/*          Stream*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  <div className="z-30 w-full flex justify-start">*/}
      {/*    <Link href="/shop">*/}
      {/*      <div className="p-1 w-fit">*/}
      {/*        <span*/}
      {/*          className={`${blockFont.className} uppercase text-white text-3xl xs:text-sm sm:text-3xl`}*/}
      {/*        >*/}
      {/*          Shop*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  /!*<div className="">*!/*/}
      {/*  /!*  <a href={spotify.href} target="_blank">*!/*/}
      {/*  /!*    <div className="border-2 border-ruckus-purple bg-black bg-opacity-60 rounded-xl p-1">*!/*/}
      {/*  /!*      <span className="uppercase font-extrabold text-white text-xs xs:text-sm sm:text-3xl">*!/*/}
      {/*  /!*        Stream*!/*/}
      {/*  /!*      </span>*!/*/}
      {/*  /!*    </div>*!/*/}
      {/*  /!*  </a>*!/*/}
      {/*  /!*</div>*!/*/}
      {/*  /!*<div className="">*!/*/}
      {/*  /!*  <Link href="/shop">*!/*/}
      {/*  /!*    <div className="border-2 border-ruckus-blue bg-black bg-opacity-60 rounded-xl p-1 px-[27px] xs:px-[30px]">*!/*/}
      {/*  /!*      <span className="uppercase font-extrabold text-white text-xs xs:text-sm sm:text-3xl">*!/*/}
      {/*  /!*        Shop*!/*/}
      {/*  /!*      </span>*!/*/}
      {/*  /!*    </div>*!/*/}
      {/*  /!*  </Link>*!/*/}
      {/*  /!*</div>*!/*/}
      {/*</div>*/}
    </div>
  );
};

export default Hero;
