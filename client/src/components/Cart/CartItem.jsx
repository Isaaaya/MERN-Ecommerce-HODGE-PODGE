import Placeholder from "assets/images/placeholder.webp";
import { Link } from "react-router-dom";

import { useRemoveManyFromCart } from "hooks/cart/useRemoveManyFromCart";

import { TrashIcon } from "assets/icons";
import { CartItemQuantityManager } from "components/Cart";
import { Button } from "components/Common/index";

const CartItem = ({
  product,
  productQuantityInCart,
  productAvailableQuantity,
  cart,
  closeCart,
}) => {
  const { removeMany, isRemoveManyPending } = useRemoveManyFromCart({
    product,
    productQuantityInCart,
  });

  return (
    <li>
      <Link to={`/products/${product?._id}`}>
        <div
          onClick={closeCart}
          to={`/products/${product?._id}`}
          className={`flex justify-between gap-5 p-2 pb-5 rounded-md w-full border-b ${
            !productAvailableQuantity && "bg-gray-300/[0.4]"
          }`}
        >
          <div className="flex items-start h-full gap-5">
            <div className="w-20 h-20 overflow-hidden rounded-md aspect-square">
              <img
                className="object-cover w-20 h-20"
                src={product?.images[0] || Placeholder}
                alt={product?.title}
              />
            </div>
            <div className="space-y-2 text-start">
              <p className="text-lg">{product?.title}</p>
              {productAvailableQuantity > 0 ? (
                <div
                  className="flex justify-start gap-3"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <p>${product?.price}</p>
                  <CartItemQuantityManager
                    cart={cart}
                    product={product}
                    productAvailableQuantity={productAvailableQuantity}
                    productQuantityInCart={productQuantityInCart}
                  />
                  {productAvailableQuantity > 0 && (
                    <p className="text-lg">
                      ${product?.price * productQuantityInCart}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-black/[0.5] text-[16px]">Out of Stock</p>
              )}
            </div>
          </div>
          <div className="self-end">
            <Button
              disabled={isRemoveManyPending}
              spinner={isRemoveManyPending}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeMany();
              }}
              caption={<TrashIcon width="25" height="25" />}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CartItem;
