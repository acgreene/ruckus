import React from "react";

interface PhotoAdamProps {
  // Define your prop types here
}

const PhotoAdam: React.FC<PhotoAdamProps> = ({}) => {
  return (
    <div className="absolute filter grayscale top-1/2 right-0 -translate-x-[-40%] sm:-translate-x-0 -translate-y-[45%] flex h-[300px] sm:h-[400px] sm:w-[300px] rotate-[8deg]">
      <img src="/IMG_5.JPG" className="w-full h-full object-contain" />
    </div>
  );
};

export default PhotoAdam;
