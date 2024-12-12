import React, { useState, useEffect } from "react";
import { useCartStore } from "../store/cart";
import Cart from "./cart";
import { AiOutlineClose } from "react-icons/ai";

export default function SideCartMenu() {
  const {
    carts,
    showSideCart,
    toggleSideCart,
    removeFromCart,
    clearCart,
    getTotalCost,
    decreaseQuantity,
    increaseQuantity,
  } = useCartStore();

  useEffect(() => {
    if (carts.length > 0) {
      toggleSideCart(true); // Show the side cart when there's at least one item
    }
  }, [carts, toggleSideCart]);

 return (
   <>
     {/* Backdrop */}
     {showSideCart && (
       <div
         className="fixed inset-0 bg-black opacity-50 z-30"
         onClick={() => toggleSideCart(false)} // Close the side cart when clicking on the backdrop
       />
     )}

     {/* Side Cart */}
     <div
       className={`fixed w-full sm:w-3/4 right-0 top-0 p-3 border-2 border-neutral bg-primary h-full z-40 text-white transform transition-transform duration-500 ease-in-out ${
         showSideCart ? "translate-x-0" : "translate-x-full"
       }`}
     >
       <Cart
         carts={carts}
         removeFromCart={removeFromCart}
         clearCart={clearCart}
         getTotalCost={getTotalCost}
         decreaseQuantity={decreaseQuantity}
         increaseQuantity={increaseQuantity}
       />
       <button
         onClick={() => toggleSideCart(false)} // Close the side cart
         className="absolute top-0 right-0 p-2 text-white"
       >
         <AiOutlineClose className="text-4xl" />
       </button>
     </div>
   </>
 );
}
