import { useAddToCart } from "hooks/cart/useAddToCart";
import { useRemoveOneFromCart } from "hooks/cart/useRemoveOneFromCart";
import { Button } from "components/common";

import { Spinner } from "components/Icons/index";

const CartItemQuantityManager = ({
  productId,
  productPrice,
  productQuantity,
  productQuantityInCart,
}) => {
  const { addToCart, isAddToCartPending } = useAddToCart(
    productId,
    productPrice
  );
  const { removeOneFromCart, isRemoveOneFromCartPending } =
    useRemoveOneFromCart(productId, productPrice);

  return (
    <div className="flex items-center justify-between w-24 h-12 px-4 text-xl border rounded-md">
      <Button
        onClick={removeOneFromCart}
        disabled={isRemoveOneFromCartPending}
        caption="-"
      />
      <p>
        {isAddToCartPending || isRemoveOneFromCartPending ? (
          <Spinner />
        ) : (
          productQuantityInCart
        )}
      </p>
      <Button
        onClick={addToCart}
        disabled={
          isAddToCartPending || productQuantityInCart === productQuantity
        }
        caption="+"
      />
    </div>
  );
};

export default CartItemQuantityManager;
