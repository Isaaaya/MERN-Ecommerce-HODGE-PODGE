import { Spinner } from "assets/icons";
import { Button } from "../Common/index";
import { useAddToCart } from "hooks/cart/useAddToCart";
import { useRemoveOneFromCart } from "hooks/cart/useRemoveOneFromCart";

const CartItemQuantityManager = ({
  product,
  productAvailableQuantity,
  productQuantityInCart,
}) => {
  const { addToCart, isAddToCartPending } = useAddToCart(product);
  const { removeOneFromCart, isRemoveOneFromCartPending } =
    useRemoveOneFromCart(product);

  const isMaxQuantityReached =
    productQuantityInCart === productAvailableQuantity;

  return (
    <div className="flex items-center justify-between h-12 gap-3 px-4 text-xl border rounded-md w-fit">
      <Button
        extraStyles={"hover:bg-gray-200 w-6"}
        onClick={removeOneFromCart}
        disabled={isRemoveOneFromCartPending}
        caption="-"
      />
      <p className="w-5 text-center">
        {isAddToCartPending || isRemoveOneFromCartPending ? (
          <Spinner width="20" height="20" />
        ) : (
          productQuantityInCart
        )}
      </p>
      <Button
        extraStyles={"hover:bg-gray-200 w-6"}
        onClick={addToCart}
        disabled={isAddToCartPending || isMaxQuantityReached}
        caption="+"
      />
    </div>
  );
};

export default CartItemQuantityManager;
