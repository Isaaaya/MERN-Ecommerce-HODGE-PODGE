import parse from "html-react-parser";

import { AddToCartButton } from "components/Cart";
import { ProductInfoSkeleton } from "components/skeletons";
import ToggleWishlistButton from "components/Wishlist/ToggleWishlistButton";

const ProductInfo = ({ product, productAvailableQuantity }) => {
  if (product?._id)
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
        <AddToCartButton
          product={product}
          productAvailableQuantity={productAvailableQuantity}
        />
        {product?.description && product?.extraDetails && (
          <div className="space-y-3">
            <ToggleWishlistButton productId={product?._id} />
            <div className="text-justify [&_strong]:text-black/[0.9] [&_strong]:font-black">
              {parse(`${product?.description}`)}
            </div>
            <div className="space-y-2">
              <p className="text-xl">Extra details</p>
              <div className="text-justify [&_strong]:text-black/[0.9] [&_strong]:font-black">
                {parse(`${product?.extraDetails}`)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  else return <ProductInfoSkeleton />;
};

export default ProductInfo;
