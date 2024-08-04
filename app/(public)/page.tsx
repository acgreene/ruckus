import Hero from "@/components/lander/Hero";
import SpotifyFeature from "@/components/lander/SpotifyFeature";
import { getYouAlone } from "@/constants/songLinks";
import EmailSubscribe from "@/components/common/EmailSubscribe";
import ProductCarousel from "@/components/lander/ProductCarousel";
import { blockFont } from "@/fonts";

export default function Home() {
  return (
    <div className="w-screen overflow-x-clip relative px-4">
      <Hero />
      <SpotifyFeature
        title={getYouAlone.name}
        img_fp={getYouAlone.img_fp}
        link={getYouAlone.link}
      />

      <div className="flex flex-col space-y-2">
        <span className={`${blockFont.className} uppercase text-2xl`}>
          Get Merch
        </span>
        <ProductCarousel />
      </div>

      <div className="pb-36">
        <EmailSubscribe
          message="Get notified about our shows, new merch, and more!"
          feature={true}
        />
      </div>
    </div>
  );
}
