import { useAddToCart } from "hooks/cart/useAddToCart";
import { Button } from "components/common";

const AddToCartButton = ({
  _id: productId,
  price: productPrice,
  quantity: productQuantity,
}) => {
  const { addToCart, isAddToCartPending } = useAddToCart(
    productId,
    productPrice
  );
  const productIsAvailable = productQuantity > 0;

  return (
    <Button
      caption={!productIsAvailable ? "Out of Stock" : "Add To Cart"}
      disabled={isAddToCartPending || !productIsAvailable}
      spinner={isAddToCartPending}
      onClick={addToCart}
      extraStyles={`w-[150px] h-10 text-lg text-gray-500 transition duration-100 border-2 border-rose-300 hover:bg-rose-200/50 ${
        !productIsAvailable &&
        "bg-black/[0.2] border-none hover:bg-black/[0.3] cursor-not-allowed "
      }`}
    />
  );
};

export default AddToCartButton;
