import React from "react";

interface PhotoIanEliProps {
  // Define your prop types here
}

const PhotoIanEli: React.FC<PhotoIanEliProps> = ({}) => {
  return (
    <div className="absolute filter grayscale top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 flex w-[300px] sm:w-[400px] overflow-hidden h-[150px] sm:h-[300px] rotate-[-93deg]">
      <img
        src="/IMG_1.JPG"
        className="w-full h-full object-cover scale-[1.25]"
      />
    </div>
  );
};

export default PhotoIanEli;
