import React from "react";
import Placeholder from "assets/images/placeholder.webp";

const CollectionBanner = ({ banner }) => {
  return (
    <article className="flex flex-col md:flex-row overflow-hidden rounded-xl h-[550px] md:h-[490px] bg-[#eeeeee]">
      <div className="md:w-[50%] h-[45%] md:h-[100%] aspect-square">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={banner?.imageUrl || Placeholder}
          alt={banner?.caption}
        />
      </div>
      <div className="flex flex-col gap-5 pt-10 mx-auto text-center md:pt-24 w-[80%] md:w-[50%]">
        <p
          className="text-4xl w-[90%] mx-auto"
          style={{ color: banner?.captionColor }}
        >
          {banner?.caption}
        </p>
        <p className="text-lg w-[90%] md:w-[80%] mx-auto text-gray-600">
          {banner?.content}
        </p>
      </div>
    </article>
  );
};

export default CollectionBanner;
