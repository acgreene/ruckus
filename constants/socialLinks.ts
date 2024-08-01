import type { IconType } from "react-icons";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
  platform: string;
}

export const instagram: SocialLink = {
  name: "@theruckuslive",
  icon: FaSquareInstagram,
  href: "https://www.instagram.com/theruckuslive/",
  platform: "Instagram",
};

export const spotify: SocialLink = {
  name: "The Ruckus",
  icon: FaSpotify,
  href: "https://open.spotify.com/artist/4I1PdfZZ8VFpRcxu3qlegt?si=g87EkfFLS_aonbD3gepZWQ",
  platform: "Spotify",
};

export const tiktok: SocialLink = {
  name: "@theruckuslive",
  icon: AiFillTikTok,
  href: "https://www.tiktok.com/@theruckuslive",
  platform: "TikTok",
};

export const socialLinks: SocialLink[] = [instagram, spotify, tiktok];
