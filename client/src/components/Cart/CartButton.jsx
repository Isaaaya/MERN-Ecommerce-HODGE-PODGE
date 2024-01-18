import { useState } from "react";
import { useGetUserCart } from "hooks/cart/useGetUserCart";

import { BagIcon } from "components/Icons/index";
import { Cart } from "components/Cart/index";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { userCart, cartTotalItems, cartTotalPrice } = useGetUserCart();

  return (
    <li>
      <button
        aria-label="Open the Cart Button"
        onClick={() => setIsCartOpen(true)}
        className="relative text-gray-500 peer"
      >
        <BagIcon />
        {cartTotalItems > 0 && (
          <div className="absolute w-5 h-5 text-xs bg-[#7b0b45] text-white rounded-full -top-[5px] -right-[5px] flex justify-center items-center font-semibold">
            {cartTotalItems}
          </div>
        )}
      </button>
      <Cart
        cart={userCart}
        cartTotalPrice={cartTotalPrice}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </li>
  );
};

export default CartButton;
