import React from "react";
import Book from "@/components/common/Book";

interface PageProps {
  // Define your prop types here
}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div>
      <Book />
    </div>
  );
};

export default Page;
