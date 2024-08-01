import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import { primaryFont } from "@/fonts";

export const metadata: Metadata = {
  title: "The Ruckus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} text-white bg-black`}>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
