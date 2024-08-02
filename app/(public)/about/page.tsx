import React from "react";
import { blockFont, featureFont } from "@/fonts";
import Snapshots from "@/components/about/Snapshots";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex px-2 w-full min-h-screen sm:min-h-[50vh] justify-center items-start flex-col space-y-4">
      <span
        className={`${featureFont.className} uppercase text-ruckus-blue text-4xl`}
      >
        The Ruckus
      </span>

      <span className={`sm:text-2xl`}>
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

      <span className="sm:text-2xl">
        <span className={`${featureFont.className} text-ruckus-purple`}>
          Throwback
        </span>{" "}
        funk, rnb and soul
      </span>

      <span className="sm:text-2xl">
        Will bring energy to any event with its organic band chemistry and a{" "}
        <span className={`${featureFont.className} text-ruckus-blue`}>
          genre fluid
        </span>{" "}
        repertoire of more than 5 hours of music
      </span>

      <span className="sm:text-2xl">Started in 2021 in Ann Arbor, MI</span>

      <span className={`${blockFont.className} uppercase text-xl sm:text-4xl`}>
        Snapshots through the years
      </span>

      <Snapshots />
    </div>
  );
};

export default Page;
