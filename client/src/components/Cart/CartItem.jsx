import React from "react";
import Placeholder from "assets/images/placeholder.webp";
import { Link } from "react-router-dom";

import { useRemoveManyFromCart } from "hooks/cart/useRemoveManyFromCart";

import { CartItemQuantityManager } from "components/Cart/index";
import { Button } from "components/common";
import { TrashIcon } from "components/Icons";

const CartItem = ({ product, quantity, cart, setIsCartOpen }) => {
  const productIsAvailable = product?.quantity > 0;
  const { removeMany, isRemoveManyPending } = useRemoveManyFromCart({
    productId: product?._id,
    productQuantityInCart: quantity,
  });

  return (
    <Link to={`/products/${product?._id}`}>
      <div
        onClick={() => setIsCartOpen(false)}
        to={`/products/${product?._id}`}
        className={`flex justify-between gap-5 p-2 pb-5 rounded-md w-full border-b ${
          product?.quantity < 1 && "bg-gray-300/[0.4]"
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
            {productIsAvailable ? (
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
                  productId={product?._id}
                  productQuantity={product?.quantity}
                  productPrice={product?.price}
                  productQuantityInCart={quantity}
                />
                {productIsAvailable && (
                  <p className="text-lg">${product?.price * quantity}</p>
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
            caption={<TrashIcon />}
          />
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
