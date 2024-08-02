"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import CaptionedImg, {
  CaptionedImgProps,
} from "@/components/common/CaptionedImg";
import { Loading } from "@/components/common/Loading";

const Snapshots = () => {
  const [snapshots, setSnapshots] = useState<CaptionedImgProps[]>([]);
  const [loaded, setLoaded] = useState(false);

  async function getSnapshots() {
    // select all future shows
    const { data, error } = await supabase.from("snapshots").select("*");

    if (data !== null && error === null) {
      const shots = [];
      for (let i = 0; i < data.length; i++) {
        const { data: storageData } = supabase.storage
          .from("images")
          .getPublicUrl(`gallery/snapshots/${data[i]?.img_filename}`);

        const shot: CaptionedImgProps = {
          caption: data[i]?.caption,
          img_src: storageData.publicUrl,
        };
        shots.push(shot);
      }
      setSnapshots(shots);
    }
    setLoaded(true);
  }

  useEffect(() => {
    getSnapshots().then(() => {});
  }, []);
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-20">
      {loaded ? (
        <>
          {snapshots.map((snapshot, index) => (
            <CaptionedImg
              key={index}
              caption={snapshot.caption}
              img_src={snapshot.img_src}
            />
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Snapshots;
