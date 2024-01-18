// import { useEffect } from "react";
// import { createPortal } from "react-dom";

const CartModal = ({ cart, cartTotalPrice, isCartOpen, setIsCartOpen }) => {
  //   useEffect(() => {
  //     if (document) {
  //       document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  //     }
  //   }, [isCartOpen]);
  //   const closeModal = () => {
  //     setIsCartOpen(false);
  //     setTimeout(() => {
  //       setIsCartOpen(false);
  //     }, 300);
  //   };
  //   if (!isCartOpen) return null;
  //   return createPortal(
  //     <div
  //       onClick={closeModal}
  //       className="fixed top-0  w-full h-full bg-black/[0.3]"
  //     >
  //       <aside
  //         className={`fixed top-0 right-0 h-screen bg-white text-darkMain shadow-lg border-4 p-6 ${
  //           !isCartOpen ? "-translate-x-36" : ""
  //         }  ease-in-out duration-500 `}
  //       >
  //         <p>This is cart</p>
  //       </aside>
  //     </div>,
  //     document.getElementById("modal")
  //   );
};

export default CartModal;
