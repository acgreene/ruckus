import React from "react";

export interface RosterEntryProps {
  name: string;
  instruments: string[];
  img_src: string;
  href: string;
  handle: string;
}

const RosterEntry: React.FC<RosterEntryProps> = ({
  name,
  instruments,
  img_src,
  href,
  handle,
}) => {
  function pickRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
  }

  const colorMap = new Map<number, string>([
    [1, "bg-ruckus-yellow"],
    [2, "bg-ruckus-blue"],
    [3, "bg-ruckus-orange"],
    [4, "bg-ruckus-purple"],
  ]);

  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className={`w-1/2 p-1 ${colorMap.get(pickRandomNumber())}`}>
        <div className="flex h-[200px] sm:h-[400px]">
          <img src={img_src} className="w-full h-full object-cover grayscale" />
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-1/2 pl-2">
        <span className="sm:text-2xl">{name}</span>
        <a href={href} target="_blank">
          <div className="flex flex-row space-x-0 items-center text-sm sm:text-xl">
            <span>@{handle}</span>
          </div>
        </a>

        <div>
          {instruments.map((item, index) => (
            <div className="text-sm sm:text-xl" key={index}>
              <span>{item}</span>
              {index !== instruments.length - 1 ? <span>, </span> : <></>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RosterEntry;
