import React from "react";
import { handleImageResolution } from "utils/functions/handleImageResolution";

import Placeholder from "assets/images/placeholder.webp";

const ProductCard = ({ title, images, productCollection, price, quantity }) => {
  return (
    <article className="relative overflow-hidden min-h-72 rounded-xl">
      {quantity < 1 && (
        <div className="absolute w-full h-full bg-gray-300/[0.4]" />
      )}
      <div className="overflow-hidden cursor-pointer aspect-square rounded-xl group h-[100%] w-full">
        <img
          className={`object-cover object-center rounded-xl transition-all duration-500 h-full w-full ${
            images?.length > 1 && "group-hover:hidden"
          }`}
          width={80}
          height={80}
          src={handleImageResolution(images[0], 1000) || Placeholder}
          srcSet={
            images?.length > 0
              ? `${handleImageResolution(images[0], 800)} 800w,
                   ${handleImageResolution(images[0], 600)} 600w,
          `
              : ""
          }
          alt={title}
        />
        {images?.length > 1 && (
          <img
            className="object-cover object-center w-full h-[100%] rounded-xl group-hover:block hidden transition duration-300 ease-in-out hover:scale-110"
            src={images[1] || Placeholder}
            alt={title}
          />
        )}
      </div>
      <div className="p-2 space-y-1 text-lg text-start text-darkMain">
        <div className="space-y-[-5px]">
          <p>{title}</p>
          <p className="tracking-wider uppercase text-[12px]">
            {productCollection?.title}
          </p>
        </div>
        <p>{quantity > 0 ? "In stock" : "Out of Stock"}</p>
        <p>${price} USD</p>
      </div>
    </article>
  );
};

export default ProductCard;
