import { useCreateOrder } from "hooks/order/useCreateOrder";
import { Button } from "../common/index";

const OrderArticle = ({ totalItems, totalPrice, order }) => {
  const { createOrder, isCreateOrderPending } = useCreateOrder({
    order,
  });

  return (
    <article className="min-h-[350px] bg-gray-100/[0.5] rounded-md border p-10 space-y-2 order-1">
      <div className="pb-5 space-y-4 border-b-2">
        <Button
          disabled={isCreateOrderPending}
          onClick={createOrder}
          spinner={isCreateOrderPending}
          caption="Order"
          extraStyles="w-full h-10"
          theme="basicDark"
        />
        <p className="text-gray-600">
          By confirming your order, you agree to our company{" "}
          <span className="text-black">Privacy policy</span> and{" "}
          <span className="text-black">Conditions of use</span>.
        </p>
      </div>
      <p className="text-lg">Order Summary</p>
      <div className="grid grid-cols-2 pb-5 border-b-2 even:text-end [&>*:nth-child(even)]:text-end">
        <p>Items ({totalItems || 0})</p>
        <p>${totalPrice || 0}</p>
        <p>Shipping and handling</p>
        <p>$5.50</p>
      </div>
      <div className="grid grid-cols-2 [&>*:nth-child(even)]:text-end">
        <p>Order Total:</p>
        <p>${(totalPrice || 0) + 5.5}</p>
      </div>
    </article>
  );
};

export default OrderArticle;
