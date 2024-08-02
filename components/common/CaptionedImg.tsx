import React from "react";
import { featureFont } from "@/fonts";

interface CaptionedImgProps {
  caption: string;
  img_src: string;
  className?: string;
}

const CaptionedImg: React.FC<CaptionedImgProps> = ({
  caption,
  img_src,
  className,
}) => {
  return (
    <div
      className={`${className ? className : "w-[250px] sm:w-[600px]"} flex relative`}
    >
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 p-1 bg-black">
        <span
          className={`${featureFont.className} text-ruckus-yellow text-sm sm:text-xl whitespace-nowrap`}
        >
          {caption}
        </span>
      </div>

      <img src={img_src} alt="" className="h-full w-full object-contain" />
    </div>
  );
};

export default CaptionedImg;
