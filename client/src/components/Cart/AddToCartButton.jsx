import { Button } from "../Common/index";
import { useAddToCart } from "hooks/cart/useAddToCart";

const AddToCartButton = ({ product, productAvailableQuantity }) => {
  const { addToCart, isAddToCartPending } = useAddToCart(product);

  return (
    <Button
      caption={!productAvailableQuantity ? "Out of Stock" : "Add To Cart"}
      disabled={isAddToCartPending || !productAvailableQuantity}
      spinner={isAddToCartPending}
      onClick={addToCart}
      extraStyles={`w-[150px] h-10 text-lg text-gray-500 transition duration-100 border-2 border-rose-300 hover:bg-rose-200/50 ${
        !productAvailableQuantity &&
        "bg-black/[0.2] border-none hover:bg-black/[0.3] cursor-not-allowed "
      }`}
    />
  );
};

export default AddToCartButton;
