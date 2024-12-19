import { useCartStore } from "../store/cart";
import Cart from "../components/cart";

export default function ShoppingCart() {
  const {
    carts,
    removeFromCart,
    clearCart,
    getTotalCost,
    decreaseQuantity,
    increaseQuantity,
  } = useCartStore();

  return (
    <Cart
      carts={carts}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      getTotalCost={getTotalCost}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
    />
  );
}
