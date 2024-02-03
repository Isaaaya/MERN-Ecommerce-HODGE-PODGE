import { usePreventScroll } from "hooks/preventScroll/usePreventScroll";

import { XMarkIcon } from "assets/icons";
import { CheckOutButton } from "Components/CheckOut";
import { CartList, CloseCartButton } from "Components/Cart";

const Cart = ({ cart, cartTotalPrice, isCartOpen, closeCart }) => {
  usePreventScroll({ condition: isCartOpen });

  return (
    <div
      onClick={closeCart}
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
        <div className="flex items-center justify-between px-3 pt-6 border-b-2 ">
          <p className="py-2 text-2xl">Your Cart</p>
          <CloseCartButton
            ariaLabel="Close Cart"
            caption={<XMarkIcon width="30" height="30" />}
            onClick={closeCart}
          />
        </div>
        <div className="flex flex-col h-full gap-5 pb-20 text-start">
          {cart?.products?.length > 0 && (
            <>
              <CartList
                extraStyles="flex flex-col gap-24 overflow-y-auto"
                cart={cart}
                closeCart={closeCart}
              />
              <div className="flex flex-col gap-5">
                <p className="text-2xl">Total Price: ${cartTotalPrice}</p>
                <CheckOutButton closeCart={closeCart} />
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
