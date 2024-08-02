import React from "react";
import { blockFont, featureFont } from "@/fonts";
import CaptionedImg from "@/components/common/CaptionedImg";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex px-2 w-full min-h-screen sm:min-h-[50vh] justify-center items-start flex-col space-y-4 pt-20 pb-6">
      <span
        className={`${featureFont.className} uppercase text-ruckus-blue text-4xl`}
      >
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

      <span>
        <span className={`${featureFont.className} text-ruckus-purple`}>
          Throwback
        </span>{" "}
        funk, rnb and soul
      </span>

      <span>
        Will bring energy to any event with its organic band chemistry and a{" "}
        <span className={`${featureFont.className} text-ruckus-blue`}>
          genre fluid
        </span>{" "}
        repertoire of more than 5 hours of music
      </span>

      <span>Started in 2021 in Ann Arbor, MI</span>

      <span className={`${blockFont.className} uppercase text-xl`}>
        Snapshots through the years
      </span>

      <div className="flex flex-col w-full justify-center items-center space-y-20">
        <CaptionedImg
          caption="September 2021: First gig!!"
          img_src="/IMG_7.JPG"
        />

        <CaptionedImg caption="October 2021: Owen Coop" img_src="/IMG_9.JPG" />

        <CaptionedImg caption="October 2021: Lutherween" img_src="/IMG_8.JPG" />

        <CaptionedImg caption="November 2021" img_src="/IMG_3.JPG" />
        <CaptionedImg caption="February 2022: TedxUofM" img_src="/IMG_10.JPG" />
        <CaptionedImg caption="March 2022: Studio A" img_src="/IMG_11.jpg" />
        <CaptionedImg caption="April 2022" img_src="/IMG_12.jpg" />
        <CaptionedImg caption="August 2022: UMMA" img_src="/IMG_13.JPG" />
        <CaptionedImg caption="August 2022: Greenwood" img_src="/IMG_14.jpg" />
        <CaptionedImg
          caption="September 2022: The Ark"
          img_src="/IMG_15.jpeg"
        />
        <CaptionedImg caption="October 2022" img_src="/IMG_16.jpg" />
        <CaptionedImg
          caption="February 2023: The Blind Pig"
          img_src="/IMG_17.JPG"
        />
        <CaptionedImg
          caption="March 2024: Onboard Acoustics"
          img_src="/IMG_18.JPG"
        />
        <CaptionedImg caption="March 2024" img_src="/IMG_19.JPG" />
        <CaptionedImg caption="July 2024: Dreamtroit" img_src="/IMG_20.jpg" />
      </div>
    </div>
  );
};

export default Page;
