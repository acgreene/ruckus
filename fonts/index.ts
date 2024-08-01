import { Archivo_Black, Permanent_Marker, Poppins } from "next/font/google";

// feature font
export const featureFont = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});
// export const bangers = Bangers({ weight: "400", subsets: ["latin"] });
// export const rockSalt = Rock_Salt({ weight: "400", subsets: ["latin"] });
export const blockFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

// primary fonts
export const primaryFont = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// secondary fonts