import React from "react";
import Marquee from "@/components/common/Marquee";

interface DeveloperTagProps {
  // Define your prop types here
}

const DeveloperTag: React.FC<DeveloperTagProps> = ({}) => {
  return (
    <Marquee
      element={
        <a href="https://www.instagram.com/aleccgreene/">
          <div className="px-8">
            <span className="text-white text-sm md:text-xl">
              developed by @aleccgreene {""}
            </span>
          </div>
        </a>
      }
      speed={12}
      direction={true}
    />
  );
};

export default DeveloperTag;
