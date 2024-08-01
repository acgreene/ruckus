import React from "react";
import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";

interface SocialsProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  row?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ size, row }) => {
  const sizeMap = new Map<number, string>([
    [1, "text-base"],
    [2, "text-lg"],
    [3, "text-xl"],
    [4, "text-2xl"],
    [5, "text-3xl"],
    [6, "text-4xl"],
    [7, "text-5xl"],
    [8, "text-6xl"],
    [9, "text-7xl"],
    [10, "text-8xl"],
  ]);

  return (
    <div
      className={`justify-center items-start flex ${row ? "flex-row space-x-4" : "flex-col space-y-4"}`}
    >
      {socialLinks.map((link, i) => (
        <Link href={link.href} key={i} target="_blank" rel="noreferrer">
          <div
            className={`flex flex-row space-x-2 justify-start items-center ${sizeMap.get(size)}`}
          >
            <link.icon />
            <span>{link.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
