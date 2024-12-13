import React, { useState, useEffect } from "react";
import { useCartStore } from "../store/cart";
import Cart from "./cart";
import { AiOutlineClose } from "react-icons/ai";
import DeleteIcon from "../svg/deleteIcon";

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

  const totalCost = (getTotalCost() || 0).toFixed(2);

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
        className={`fixed w-full sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 right-0 top-0 p-3 bg-neutral h-full z-40 transform transition-transform duration-500 ease-in-out ${
          showSideCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 text-black">
          <h1 className="text-xl text-center text-black">Shopping Cart</h1>
          {carts.length === 0 ? (
            <p className="text-lg text-center mt-20">Your cart is empty</p>
          ) : (
            <div>
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="my-5 gradient-border-side-menu grid grid-cols-1 sm:grid-cols-12 p-3 items-center justify-items-center sm:justify-items-start"
                >
                  {/* Image and Title Section */}
                  <div className="col-span-2 flex items-center gap-2 justify-center sm:justify-start">
                    <img
                      src={cart.image.url}
                      alt={cart.image.alt}
                      className="h-20"
                    />
                  </div>

                  {/* Price Section */}
                  <div className="col-span-12 sm:col-span-6 flex flex-col justify-center sm:justify-center mt-3 sm:mt-0">
                    <p className="font-bold">{cart.title}</p>
                    <p>
                      ${(cart.quantity * cart.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity and Delete Section */}
                  <div className="col-span-12 sm:col-span-3 flex items-center justify-center sm:justify-center mt-3 sm:mt-0">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <button
                        onClick={() => decreaseQuantity(cart.id)}
                        className=" p-2 font-bold text-2xl"
                      >
                        -
                      </button>
                      <p>{cart.quantity}</p>
                      <button
                        onClick={() => increaseQuantity(cart.id)}
                        className="p-2 font-bold text-2xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="ml-3"
                    onClick={() => removeFromCart(cart.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              ))}
              <div className="mt-auto flex flex-col items-end">
                <button
                  onClick={clearCart}
                  className={`mt-5 px-5 py-2 bg-red-300 rounded ${
                    carts.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={carts.length === 0}
                >
                  Empty cart
                </button>
              </div> 
                <div className="flex flex-col mt-5">
                  <p className="font-bold">
                    Sub total: <span className="text-green-500">$ </span>
                    {totalCost}
                  </p>
                  <button className="btn bg-green-500 text-black px-5 py-2 font-bold">
                    Checkout
                  </button>
                </div>
              </div>
          )}
        </div>
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
