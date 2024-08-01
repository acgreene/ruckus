import React from "react";

interface PhotoHornsProps {
  // Define your prop types here
}

const PhotoHorns: React.FC<PhotoHornsProps> = ({}) => {
  return (
    <div className="absolute filter grayscale top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[600px]">
      <img src="/IMG_3.JPG" className="w-full h-full object-contain" />
    </div>
  );
};

export default PhotoHorns;
