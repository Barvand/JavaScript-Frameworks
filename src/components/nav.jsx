import { Link } from "react-router-dom";
import Logo from "../svg/logo";
import { useCartStore } from "../store/cart";
import Hamburger from "hamburger-react";
import { useState } from "react";

export function Navigation() {
  const { carts } = useCartStore();

  return (
    <nav className="sm:container p-4 font-koulen text-xl border-bottom-styling">
      <div className="md:container">
        <ul className="flex py-2 justify-end gap-5 items-center">
          <li className="flex-1">
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hidden md:block">
            <Link to="/products">Products</Link>
          </li>
          <Link to="/cart" className="nav--shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="nav--shopping-cart-count">
              {carts.reduce((total, item) => total + item.quantity, 0)}
            </div>
          </Link>
          <HamburgerComponent />
        </ul>
      </div>
    </nav>
  );
}

export default function HamburgerComponent() {
  const { carts } = useCartStore();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`hamburger-width w-96 gradient-border z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="sm:container p-4 font-koulen text-xl items-center">
          <div className="md:container flex flex-col items-center justify-center h-full text-center">
            <Link to="/" className="mb-4">
              <Logo />
            </Link>
            <ul className="flex flex-col gap-3 text-center">
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
