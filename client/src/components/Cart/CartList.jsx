import { CartItem } from "components/Cart";

const CartList = ({ cart, extraStyles, closeCart }) => {
  return (
    <ul className={`h-full py-5 ${extraStyles}`}>
      {cart?.products?.map((item) => {
        const productStillExists = item?.product?._id;
        if (productStillExists) {
          return (
            <CartItem
              key={item.product._id}
              closeCart={closeCart}
              cart={cart}
              product={item.product}
              productAvailableQuantity={item.product.quantity}
              productQuantityInCart={item.quantity}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default CartList;
