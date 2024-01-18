import React from "react";

import Placeholder from "assets/images/placeholder.webp";

const MainImage = ({ images, mainImage, title }) => {
  return (
    <div className="aspect-square max-h-100 w-[100%] rounded-xl overflow-hidden">
      <img
        fetchpriority="high"
        src={images?.length > 0 ? images[mainImage] : Placeholder}
        alt={title}
        className="object-cover object-center w-[100%] h-[100%]"
      />
    </div>
  );
};

export default MainImage;
