import { useEffect } from "react";

import { XMarkIcon } from "components/Icons/index";
import { CheckOutButton } from "components/CheckOut/index";
import { CartList } from "components/Cart/index";

const Cart = ({ cart, cartTotalPrice, isCartOpen, setIsCartOpen }) => {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = isCartOpen ? "hidden" : "auto";
    }
  }, [isCartOpen]);

  return (
    <div
      onClick={() => setIsCartOpen(false)}
      className={
        isCartOpen
          ? `fixed h-screen top-0 left-0 bg-black/[0.5] w-screen z-50 overflow-hidden`
          : ""
      }
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 z-20 w-[100%] sm:w-[500px] h-screen bg-white text-darkMain shadow-lg border-4 p-6 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="flex items-center justify-between border-b-2 ">
          <p className="text-2xl">Your Cart</p>
          <button aria-label="Close Cart" onClick={() => setIsCartOpen(false)}>
            <XMarkIcon />
          </button>
        </div>
        <div className="flex flex-col h-full gap-5 pb-12 text-start">
          {cart?.products?.length > 0 && (
            <>
              <CartList
                extraStyles="flex flex-col gap-3 overflow-y-auto"
                cart={cart}
                setIsCartOpen={setIsCartOpen}
              />
              <div className="flex flex-col gap-5">
                <p className="text-2xl">Total Price: ${cartTotalPrice}</p>
                <CheckOutButton setIsCartOpen={setIsCartOpen} />
              </div>
            </>
          )}
          {!cart?.products?.length && (
            <p className="self-center mt-10">Your cart is empty.</p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Cart;
