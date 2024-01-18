import React from "react";
import Placeholder from "assets/images/placeholder.webp";

const ProductCardSkeleton = () => {
  return (
    <article className="min-h-72 animate-pulse">
      <div className="overflow-hidden cursor-pointer aspect-square rounded-xl group h-[50%]">
        <img
          className={`object-cover object-center rounded-xl h-full w-full transition-all duration-500 bg-gray-300`}
          src={Placeholder}
          alt="Product"
        />
      </div>
      <div className="py-2 space-y-2 text-start text-darkMain">
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded-md" />
          <div className="h-5 bg-gray-300 w-[30%] rounded-md" />
          <div className="h-5 bg-gray-300 w-[50%] rounded-md" />
        </div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
