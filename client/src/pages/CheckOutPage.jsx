import { getUserData } from "utils/functions/getUserData";
import { useGetUserCart } from "hooks/cart/useGetUserCart";
import { useHandleOrder } from "hooks/order/useHandleOrder";

import { Container } from "layout";
import { OrderArticle } from "Components/Order";
import { CheckOutForm, CheckOutCart } from "Components/CheckOut";

const CheckOutPage = () => {
  const user = getUserData();
  const { userCart, cartTotalItems, cartTotalPrice } = useGetUserCart();
  const { order, setOrder } = useHandleOrder({ userCart });

  return (
    <section className="pb-10 max-h-fit">
      <Container extraStyles="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <CheckOutForm user={user} order={order} setOrder={setOrder} />
          <OrderArticle
            order={order}
            totalItems={cartTotalItems}
            totalPrice={cartTotalPrice}
          />
        </div>
        <CheckOutCart cart={userCart} cartTotalPrice={cartTotalPrice} />
      </Container>
    </section>
  );
};

export default CheckOutPage;
