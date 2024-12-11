import React from "react";
import { useCartStore } from "../store/cart"; // Ensure correct import of the Zustand store


export function ShoppingCart({ CartComponent }) {
  const { carts, removeFromCart, clearCart, getTotalCost } = useCartStore();

  // Get the total cost, rounded to two decimal places
  const totalCost = getTotalCost().toFixed(2);

  return (
    <>
      <div className="flex flex-col gap-5 h-dvh">
        <h1 className="text-xl"> Shopping cart </h1>

        {/* Check if the cart is empty */}
        {carts.length === 0 ? (
          <p className="text-lg text-center mt-20"> Your cart is empty </p>
        ) : (
          <>
            {/* Render all cart items */}
            <div>
              {carts.map((cart) => (
                <CartComponent
                  key={cart.id}
                  cart={cart}
                  removeFromCart={removeFromCart}
                />
              ))}
              <div className="mt-auto isolate justify-between">
                <button
                  onClick={() => clearCart()} // Clears all items in the cart
                  className="mt-5 border border-red-500 px-5 py-2 rounded-lg text-red-500"
                >
                  Remove all items
                </button>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">Sub total : ${totalCost}</p>
                  <button className="btn">Checkout</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
