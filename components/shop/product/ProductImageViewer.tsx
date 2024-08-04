import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ProductImageViewerProps {
  images: string[];
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({ images }) => {
  const [position, setPosition] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  function handleSetPosition(increment: boolean) {
    setIsFadeOut(true);
    setTimeout(() => {
      setPosition((prev) => {
        let newPosition = increment ? prev + 1 : prev - 1;

        if (newPosition >= images.length) {
          newPosition = 0;
        } else if (newPosition < 0) {
          newPosition = images.length - 1;
        }
        setIsFadeOut(false);

        return newPosition;
      });
    }, 250);
  }

  return (
    <div>
      {/*{images.map((image, index) => (*/}
      {/*  <div key={index}>*/}
      {/*    <img src={image} alt="" />*/}
      {/*  </div>*/}
      {/*))}*/}

      <div className="relative">
        <div
          className={`flex h-[300px] ${isFadeOut ? "opacity-0" : "opacity-100"} transition-opacity duration-[250ms] ease-in-out`}
        >
          <img
            src={images[position]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          onClick={() => handleSetPosition(false)}
          className="absolute h-full w-1/2 top-0 left-0"
        ></div>
        <div
          onClick={() => handleSetPosition(true)}
          className="absolute h-full w-1/2 top-0 right-0"
        ></div>
      </div>

      <div className="flex flex-row justify-between items-center pt-2">
        <div className="flex flex-row items-center space-x-4 text-2xl">
          <button onClick={() => handleSetPosition(false)}>
            <FaArrowLeft />
          </button>
          <button onClick={() => handleSetPosition(true)}>
            <FaArrowRight />
          </button>
        </div>

        <div className="text-2xl">
          <span>
            {position + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductImageViewer;
