import DeleteIcon from "../svg/deleteIcon";

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
            className="my-5 gradient-border-bottom grid grid-cols-1 sm:grid-cols-12 p-3 items-center justify-items-center sm:justify-items-start"
          >
            {/* Image and Title Section */}
            <div className="col-span-2 flex items-center gap-2 justify-center sm:justify-start">
              <img src={cart.image.url} alt={cart.image.alt} className="h-20" />
            </div>

            {/* Price Section */}
            <div className="col-span-12 sm:col-span-6 flex flex-col justify-center sm:justify-center mt-3 sm:mt-0">
              <p className="font-bold">{cart.title}</p>
              <p className="font-bold">
                ${(cart.quantity * cart.price).toFixed(2)}
              </p>
            </div>

            {/* Quantity and Delete Section */}
            <div className="col-span-12 sm:col-span-3 flex items-center justify-center sm:justify-center mt-3 sm:mt-0">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <button
                  onClick={() => decreaseQuantity(cart.id)}
                  className="bg-red-500 text-white p-2 font-bold"
                >
                  -
                </button>
                <p>{cart.quantity}</p>
                <button
                  onClick={() => increaseQuantity(cart.id)}
                  className="bg-green-500 text-white p-2 font-bold"
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
        <div className="mt-auto flex flex-col items-center justify-center">
          <button
            onClick={clearCart}
            className={`mt-5 border border-red-500 px-5 py-2 bg-red-500 ${
              carts.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={carts.length === 0}
          >
            Delete all items
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="font-bold">
              Sub total: <span className="text-green-500">$ </span>
              {totalCost}
            </p>
            <button className="btn bg-green-500 text-black px-5 py-2 font-bold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
