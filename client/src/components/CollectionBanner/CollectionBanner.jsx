import Placeholder from "assets/images/placeholder.webp";
import { optimizeImage } from "utils/functions/optimizeImage";

const CollectionBanner = ({ banner }) => {
  return (
    <article className="flex flex-col md:flex-row overflow-hidden rounded-xl h-fit md:h-[490px] bg-[#eeeeee]">
      <div className="md:w-[50%] h-[45%] md:h-[100%] aspect-square">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={
            optimizeImage(banner?.imageUrl, 1200, 1000, "auto:best") ||
            Placeholder
          }
          alt={banner?.caption}
        />
      </div>
      <div className="flex flex-col gap-5 py-10 mx-auto text-center md:pt-24 w-[80%] md:w-[50%]">
        <p
          className="text-4xl w-[90%] mx-auto font-headerStraight"
          style={{ color: banner?.captionColor }}
        >
          {banner?.caption}
        </p>
        <p className="w-[90%] md:w-[80%] mx-auto text-gray-600 text-justify">
          {banner?.content}
        </p>
      </div>
    </article>
  );
};

export default CollectionBanner;
