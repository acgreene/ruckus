"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { format } from "date-fns";
import { blockFont, featureFont } from "@/fonts";
import { Loading } from "@/components/common/Loading";
import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

interface ShowsProps {
  // Define your prop types here
}

const Shows: React.FC<ShowsProps> = ({}) => {
  const [shows, setShows] = useState<Array<any> | null>(null);
  const [loaded, setLoaded] = useState(false);

  async function getShows() {
    // select all future shows
    const { data } = await supabase
      .from("shows")
      .select("*")
      .gt("datetime", new Date().toISOString());

    if (data !== null) {
      // @ts-ignore
      data.sort((a: any, b: any) => {
        if (a?.datetime !== null && b?.datetime !== null) {
          const dateA = new Date(a.datetime);
          const dateB = new Date(b.datetime);
          return dateA.getTime() - dateB.getTime();
        }
      });
    }

    setShows(data);
    setLoaded(true);
  }

  useEffect(() => {
    getShows().then(() => {});
  });
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-24 pb-4">
      <div>
        <span className={`${blockFont.className} uppercase text-2xl`}>
          Show Dates
        </span>
        {loaded ? (
          <>
            {shows !== null ? (
              <div className="flex flex-col space-y-4">
                {shows.map((show, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-1 rounded-lg p-1"
                  >
                    <span
                      className={`${featureFont.className} text-2xl text-ruckus-blue font-bold`}
                    >
                      {show?.venue_name}
                    </span>
                    <span>{format(new Date(show?.datetime), "PPp")}</span>

                    <span>{show?.venue_address}</span>

                    {show?.url !== undefined ? (
                      <Link href={`${show?.url}`}>
                        <div className="flex flex-row space-x-2 justify-start items-center border px-2 rounded-lg">
                          <FaTicketAlt className="text-ruckus-yellow" />
                          <span>Buy Tickets</span>
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Shows;
