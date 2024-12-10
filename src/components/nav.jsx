import { Link } from "react-router-dom";
import Logo from "../svg/logo";
import { useCartStore } from "../store/cart";

export function Navigation() {

  const {carts} = useCartStore(); 

  return (
    <nav className="sm:container p-4 font-koulen text-xl border-bottom-styling">
      <div className="md:container">
        <ul className="flex py-2 justify-end gap-5 items-center">
          <li className="flex-1">
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <Link to="/cart" className="nav--shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="nav--shopping-cart-count">
              {carts.reduce((total, item) => total + item.quantity, 0)}
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
