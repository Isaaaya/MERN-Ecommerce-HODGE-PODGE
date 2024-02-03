import { optimizeImage } from "utils/functions/optimizeImage";

import Placeholder from "assets/images/placeholder.webp";
import { Link } from "react-router-dom";

const ProductCard = ({
  productId,
  title,
  images,
  productCollection,
  price,
  productAvailableQuantity,
}) => {
  return (
    <Link to={`/products/${productId}`}>
      <article className="relative overflow-hidden min-h-72 rounded-xl">
        {productAvailableQuantity < 1 && (
          <div className="absolute w-full h-full bg-gray-300/[0.4]" />
        )}
        <div className="w-full h-full overflow-hidden cursor-pointer min-h-30 aspect-square rounded-xl group">
          <img
            className={`object-cover object-center rounded-xl transition-all duration-500 h-full w-full ${
              images?.length > 1 && "group-hover:hidden"
            }`}
            src={
              (images?.length > 0 && optimizeImage(images[0], 700, 700)) ||
              Placeholder
            }
            srcSet={
              images?.length > 0
                ? `${optimizeImage(images[0], 275, 275)} 275w,
                   ${optimizeImage(images[0], 550, 550)} 550w,
                   ${optimizeImage(images[0], 900, 900)} 1200w`
                : ""
            }
            alt={title}
          />
          {images?.length > 1 && (
            <img
              className="object-cover object-center w-full h-[100%] rounded-xl group-hover:block hidden transition duration-300 ease-in-out hover:scale-110"
              src={optimizeImage(images[1], 700, 700) || Placeholder}
              srcSet={
                images?.length > 0
                  ? `${optimizeImage(images[1], 400, 400)} 400w,
                     ${optimizeImage(images[1], 600, 600)} 600w,
                     ${optimizeImage(images[1], 710, 710)} 710w,
                     ${optimizeImage(images[1], 1420, 1420)} 1420w`
                  : ""
              }
              alt={title}
            />
          )}
        </div>
        <div className="p-2 text-lg text-start text-darkMain">
          <div className="space-y-[-5px]">
            <p>{title}</p>
            <p className="tracking-wider uppercase text-[12px]">
              {productCollection?.title}
            </p>
          </div>
          <p>{productAvailableQuantity < 1 ? "Out of Stock" : "In stock"}</p>
          <p>${price} USD</p>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
