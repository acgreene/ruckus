import React from "react";
import { blockFont } from "@/fonts";
import { roster } from "@/constants/roster";
import RosterEntry from "@/components/common/RosterEntry";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex px-2 flex-col min-h-screen justify-center items-start space-y-8">
      <div className="pl-2">
        <span className={`${blockFont.className} uppercase text-2xl`}>
          Roster
        </span>
      </div>

      <div className="flex flex-col space-y-8 w-full justify-center items-center">
        {roster.map((r, index) => (
          <RosterEntry
            key={index}
            name={r.name}
            instruments={r.instruments}
            img_src={r.img_src}
            href={r.href}
            handle={r.handle}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
