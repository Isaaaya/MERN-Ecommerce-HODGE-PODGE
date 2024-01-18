import React from "react";

import { CartItem } from "components/Cart/index";

const CartList = ({ cart, extraStyles, setIsCartOpen }) => {
  return (
    <ul className={"h-full py-5 " + extraStyles}>
      {cart?.products?.map((item) =>
        item?.product?._id ? (
          <CartItem
            setIsCartOpen={setIsCartOpen}
            key={item?.product?._id}
            cart={cart}
            {...item}
          />
        ) : null
      )}
    </ul>
  );
};

export default CartList;
