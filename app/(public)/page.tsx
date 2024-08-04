import Hero from "@/components/lander/Hero";
import SpotifyFeature from "@/components/lander/SpotifyFeature";
import { getYouAlone } from "@/constants/songLinks";

export default function Home() {
  return (
    <div className="w-screen overflow-x-clip relative px-4">
      <Hero />
      <SpotifyFeature
        title={getYouAlone.name}
        img_fp={getYouAlone.img_fp}
        link={getYouAlone.link}
      />
    </div>
  );
}
