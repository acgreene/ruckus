/*
    --- Loading ---
    Copyright © 2024 Jefferson St - All Rights Reserved.
    Contributors:
        Alec Greene (aleccgreene@gmail.com)

    About:
        The loading animation used while fetch requests are being made.

        Using 3rd party loading animation library:
        https://uiball.com/ldrs/

    TO DO:
*/

"use client";

import React, { useEffect, useState } from "react";

export const Loading: React.FC = () => {
  const [, setIsFadedOut] = useState(true);

  useEffect(() => {
    /**
     * Dynamically imports the loading animation library.
     * https://github.com/GriffinJohnston/ldrs/blob/main/framework-guides.md#nextjs
     */
    async function getLoader(): Promise<void> {
      const { ring } = await import("ldrs");
      ring.register();
    }

    void getLoader().then(() => {});
    setTimeout(() => {
      setIsFadedOut(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadedOut(true);
      setTimeout(() => {
        setIsFadedOut(false);
      }, 1000);
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8">
      <div className={`flex h-full justify-center`}>
        <l-ring size="40" color="#EFC258" speed="1.8" stroke="5"></l-ring>
      </div>
    </div>
  );
};
