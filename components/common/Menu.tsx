"use client";

import React, { useState } from "react";
import DeveloperTag from "@/components/common/DeveloperTag";
import { makeColorGradient } from "@/functions";
import { menuLinks } from "@/constants/menuLinks";
import Link from "next/link";
import Socials from "@/components/common/Socials";
import EmailSubscribe from "@/components/common/EmailSubscribe";

interface MenuProps {
  // Define your prop types here
}

const Menu: React.FC<MenuProps> = ({}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-full w-1/2 sm:w-56">
      {/* open menu button */}
      <div className="border-l h-full p-8 flex relative justify-center items-center w-full">
        <button
          onClick={() => setToggle(!toggle)}
          className="flex justify-center items-center"
        >
          <span className="text-center">{toggle ? "Close" : "Menu"}</span>
        </button>
      </div>
      {/* toggled open menu */}
      <div
        className={`animate-gradient absolute justify-between h-lander-menu-height flex flex-col top-20 bottom-0 left-0 w-screen transition-all ease-in-out delay-100 duration-[400ms]`}
        style={{
          scale: `${toggle ? "1" : "0"}`,
          rotate: `${toggle ? "0deg" : "120deg"}`,
          opacity: `${toggle ? "1" : "0"}`,
          backgroundImage: `${makeColorGradient("#3A2015", "#EFC258")}`,
          backgroundSize: "1000% 1000%",
        }}
      >
        <div className="w-full h-full">
          <div className="grid grid-cols-2 w-full h-3/4">
            {menuLinks.map((link, i) => (
              <Link
                href={link.href}
                onClick={() => {
                  setToggle(false);
                }}
                key={i}
                className="border hover:bg-black hover:bg-opacity-5 transition-all duration-300"
              >
                <div
                  className={`w-full  h-full justify-center items-center flex`}
                >
                  <span className="text-3xl xs:text-5xl sm:text-7xl md:text-8xl hover:text-ruckus-brown transition-all duration-300">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full h-1/4 flex flex-row">
            <div className="flex w-1/2 h-full justify-center items-center">
              <div className="hidden md:flex">
                <Socials size={6} />
              </div>
              <div className="flex md:hidden">
                <Socials size={1} />
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center p-1">
              <EmailSubscribe />
            </div>
          </div>
        </div>

        <div className="w-full border border-b-2">
          <DeveloperTag />
        </div>
      </div>
    </div>
  );
};

export default Menu;
