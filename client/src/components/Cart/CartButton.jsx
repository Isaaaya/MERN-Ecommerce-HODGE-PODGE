import { useState } from "react";
import { useGetUserCart } from "hooks/cart/useGetUserCart";

import { BagIcon } from "assets/icons";
import { Cart } from "components/Cart";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { userCart, cartTotalItems, cartTotalPrice } = useGetUserCart();

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <li className="flex items-start justify-start">
      <button
        aria-label="Open the Cart Button"
        onClick={openCart}
        className="relative text-gray-500 peer"
      >
        <BagIcon width="28" height="28" />
        {cartTotalItems > 0 && (
          <div className="absolute w-5 h-5 text-xs bg-[#7b0b45] text-white rounded-full -top-[5px] -right-[7px] flex justify-center items-center font-semibold">
            {cartTotalItems}
          </div>
        )}
      </button>
      <Cart
        cart={userCart}
        cartTotalPrice={cartTotalPrice}
        isCartOpen={isCartOpen}
        openCart={openCart}
        closeCart={closeCart}
      />
    </li>
  );
};

export default CartButton;
