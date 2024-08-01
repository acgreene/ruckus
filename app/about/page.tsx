import React from "react";
import { featureFont } from "@/fonts";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex w-full min-h-screen sm:min-h-[50vh] justify-center items-start flex-col space-y-2">
      <span className={`${featureFont.className} uppercase text-ruckus-blue`}>
        The Ruckus
      </span>

      <span className={``}>
        An{" "}
        <span
          className={`${featureFont.className} uppercase text-ruckus-yellow`}
        >
          Electrifying{" "}
        </span>
        <span
          className={`${featureFont.className} uppercase text-ruckus-orange`}
        >
          funk
        </span>{" "}
        band based out of <span className={``}>New York City</span>
      </span>

      <span>Started in 2021 in Ann Arbor, MI</span>

      <div className="flex w-[300px]">
        <img src="/IMG_7.JPG" alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Page;
