import BannerImage from "assets/images/store-banner.webp";
import Placeholder from "assets/images/placeholder.webp";

import { usePreloadImage } from "hooks/preloadImage/usePreloadImage";

const Banner = () => {
  const { isImageLoaded } = usePreloadImage(BannerImage);

  return (
    <div className="relative z-0 shadow-lg">
      {isImageLoaded ? (
        <img
          fetchpriority="high"
          className="h-[700px] xs:h-[650px] sm:h-[600px] w-full object-cover brig brightness-55"
          src={BannerImage || Placeholder}
          alt="A store"
        />
      ) : (
        <div
          className="h-[700px] xs:h-[650px] sm:h-[600px] w-full object-cover brig brightness-55"
          style={{ background: `url(${Placeholder})`, backgroundSize: "cover" }}
        />
      )}
      <h1 className="absolute left-0 right-0 h-full font-serif text-6xl text-center text-white uppercase sm:top-1/3 top-20 w-[90%] mx-auto leading-normal">
        Find here what you've been looking for
      </h1>
    </div>
  );
};

export default Banner;
