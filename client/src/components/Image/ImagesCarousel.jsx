import React from "react";

import Placeholder from "assets/images/placeholder.webp";

const ImagesCarousel = ({ images, mainImage, setMainImage }) => {
  return (
    <div className="grid grid-flow-col gap-2 overflow-x-auto max-w-fit">
      {images?.map((image, index) => (
        <div
          key={index}
          onClick={() => setMainImage(index)}
          className="w-32 h-32 overflow-hidden md:w-24 md:h-24 aspect-square rounded-xl hover:cursor-pointer"
        >
          <img
            src={image || Placeholder}
            alt="Product"
            className={`h-full w-full object-cover ${
              mainImage !== index && "opacity-70"
            } `}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesCarousel;
