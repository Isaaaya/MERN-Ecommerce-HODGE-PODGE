import React from "react";

import { AddToCartButton } from "components/Cart/index";
import ToggleWishlistButton from "components/Wishlist/ToggleWishlistButton";

const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-6 md:w-[55%]">
      <div className="space-y-3">
        <p className="tracking-widest uppercase text-[14px]">
          {product?.productCollection?.title}
        </p>
        <h2 className="text-2xl md:text-5xl text-[#fc415b] font-semibold">
          {product?.title}
        </h2>
        <p className="tracking-widest text-gray-700 md:text-lg">
          ${product?.price} USD
        </p>
      </div>
      <AddToCartButton {...product} />
      <div className="space-y-3">
        <ToggleWishlistButton productId={product?._id} />
        <div
          className="break-words w-[90%]"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />
        <div className="tracking-widest">
          <p className="text-xl">Extra details</p>
          <div
            className="break-words w-[90%]"
            dangerouslySetInnerHTML={{ __html: product?.extraDetails }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
