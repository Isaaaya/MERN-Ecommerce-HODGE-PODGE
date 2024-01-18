import React from "react";

const OrderDetails = ({ showOrderDetails, instance }) => {
  return (
    <article
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 self-center bg-white border-2 min-h-[100px] w-[400px] p-5 z-50 ${
        !showOrderDetails && "hidden"
      }`}
    >
      <div className="grid grid-cols-3">
        <p className="col-span-2">Product</p>
        <p>Quantity</p>
      </div>
      {instance?.products?.map((item) => (
        <div key={item?.product} className="grid grid-cols-3">
          <p className="col-span-2">{item?.product}</p>
          <p>{item?.quantity}</p>
        </div>
      ))}
    </article>
  );
};

export default OrderDetails;
