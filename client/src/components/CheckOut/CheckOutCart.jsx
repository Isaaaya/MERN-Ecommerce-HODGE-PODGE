import { CartList } from "components/Cart/index";

const CheckOutCart = ({ cart, cartTotalPrice }) => {
  return (
    <article className="h-[650px] py-6 flex flex-col justify-between">
      <div className="overflow-y-auto">
        <p className="text-3xl font-semibold">Your Items</p>
        <CartList extraStyles="space-y-5" cart={cart} />
      </div>
      <p className="py-5 text-2xl">Total Price: ${cartTotalPrice}</p>
    </article>
  );
};

export default CheckOutCart;
