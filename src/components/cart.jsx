import React from "react";
import { useCartStore } from "../store/cart";
import DeleteIcon from "../svg/deleteIcon";

export default function Cart({ cart, removeFromCart }) {
  const { increaseQuantity, decreaseQuantity } = useCartStore();
  const cost = (cart.quantity * cart.price).toFixed(2);

  return (
    <>
      <div className="my-5 gradient-border-bottom grid grid-cols-6 p-3 items-center">
        <div className="col-span-2">
          <div className="flex items-center gap-5">
            <img src={cart.image.url} alt={cart.image.alt} className="h-20" />
            <p className="text-2xl font-bold"> {cart.title}</p>
          </div>
        </div>

        <div className="col-span-1">
          <p className="text-2xl font-bold"> ${cart.price} </p>
        </div>

        <div className="col-span-2">
          <div className="flex items-center justify-center align-center gap-1">
            <button
              onClick={() => {
                decreaseQuantity(cart.id);
              }}
              className="bg-red-500 text-white px-5 py-3 font-bold"
            >
              -
            </button>
            <p> {cart.quantity} </p>
            <button
              onClick={() => {
                increaseQuantity(cart.id);
              }}
              className="bg-green-500 text-white px-5 py-3 font-bold"
            >
              +
            </button>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-2xl font-bold"> ${cost} </p>
          <button className="cent" onClick={() => removeFromCart(cart.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
}
