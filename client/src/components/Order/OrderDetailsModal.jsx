import { createPortal } from "react-dom";
import { usePreventScroll } from "hooks/preventScroll/usePreventScroll";
import { getDate } from "utils/functions/getDate";

const OrderDetailsModal = ({ showOrderDetails, order }) => {
  usePreventScroll({ condition: showOrderDetails });
  const orderCreationDate = getDate(order?.createdAt);

  if (!showOrderDetails) return null;

  return createPortal(
    <div className="fixed top-0 w-full h-full bg-black/[0.2] flex items-center justify-center">
      <article
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 self-center bg-white border-2 min-w-[85%] h-fit p-8 z-50 rounded-lg [&_div]:text-center space-y-12 text-center ${
          !showOrderDetails && "hidden"
        }`}
      >
        <div className="space-y-3">
          <h1 className="text-lg font-bold">Order #{order?._id}</h1>
          <p className="text-start">Order created: {orderCreationDate}</p>
        </div>
        <div>
          <div className="grid grid-cols-3 font-bold ">
            <p className="col-span-2">Product</p>
            <p>Quantity</p>
          </div>
          <div className="min-h-fit max-h-[400px] overflow-y-auto">
            {order?.products?.map((item) => (
              <div key={item?.product} className="grid grid-cols-3">
                <p className="col-span-2">{item?.product}</p>
                <p>{item?.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="[&_p]:text-start space-y-2">
          <p>Total Items: {order?.totalItems}</p>
          <p>Total Price: ${order?.totalPrice}</p>
        </div>
      </article>
    </div>,
    document.getElementById("modal")
  );
};

export default OrderDetailsModal;
