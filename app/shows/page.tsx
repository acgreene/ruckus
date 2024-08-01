import React from "react";
import Shows from "@/components/common/Shows";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div>
      <Shows />
    </div>
  );
};

export default Page;
