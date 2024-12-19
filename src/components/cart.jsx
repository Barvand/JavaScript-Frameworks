import DeleteIcon from "../svg/deleteIcon";
import { Link } from "react-router-dom";

export default function Cart({
  carts,
  removeFromCart,
  clearCart,
  getTotalCost,
  decreaseQuantity,
  increaseQuantity,
}) {
  const totalCost = (getTotalCost() || 0).toFixed(2);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl text-center">Shopping Cart</h1>
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
                <Link to={`/products/${cart.id}`}>
                  <p className="font-bold">{cart.title}</p>
                  <p>${(cart.quantity * cart.price).toFixed(2)}</p>
                </Link>
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
              <button className="ml-3" onClick={() => removeFromCart(cart.id)}>
                <DeleteIcon />
              </button>
            </div>
          ))}
          <div className="mt-auto flex flex-col items-end">
            <p className="text-sm">
              You have
               <span className="text-white"> {carts.reduce((total, item) => total + item.quantity, 0)} </span> Item(s)
               in your cart
      
            </p>
            <button
              onClick={clearCart}
              className={`mt-5 px-5 py-2 bg-red-500 rounded hover:bg-red-700 hover:text-white text-black ${
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
            <button className=" bg-green-500 hover:bg-green-700 hover:text-white text-black px-5 py-2 font-bold lg:w-96">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
