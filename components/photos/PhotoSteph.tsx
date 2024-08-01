import React from "react";

interface PhotoStephProps {
  // Define your prop types here
}

const PhotoSteph: React.FC<PhotoStephProps> = ({}) => {
  return (
    <div className="absolute overflow-hidden filter grayscale top-1/2 left-0 -translate-x-[-60%] -translate-y-[50%] flex w-[300px] h-[420px] rotate-[-2deg]">
      <img src="/IMG_2.JPG" className="w-full h-full object-cover scale-[2]" />
    </div>
  );
};

export default PhotoSteph;
