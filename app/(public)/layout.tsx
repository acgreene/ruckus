import React, { ReactNode } from "react";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="pt-24 pb-4">{children}</div>
      <Footer />
    </div>
  );
}
