import { Link } from "react-router-dom";
import Logo from "../svg/logo";
import { useCartStore } from "../store/cart";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SearchBar from "./Searchbar,";

export function Nav() {
  const { carts } = useCartStore();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="sm:container p-2 font-koulen text-xl gradient-border-bottom-yellow pb-5">
      <div className="md:container">
        <ul className="flex py-2 justify-end gap-5 items-center">
          <li className="flex-1">
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/products">Products</Link>
          </li>
          <li className="hidden md:block">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/cart" className="nav--shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="nav--shopping-cart-count">
              {carts.reduce((total, item) => total + item.quantity, 0)}
            </div>
          </Link>
          <>
            <div className="block md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              />
            </div>
            <div
              className={`hamburger-width gradient-border z-30 transform transition-transform duration-500 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="sm:container p-4 font-koulen text-xl flex justify-center gap-5 relative h-dvh">
                <div className="md:container flex flex-col gap-5">
                  <div className="absolute right-5 top-10">
                    <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                      aria-expanded={isOpen}
                      aria-label="Toggle navigation"
                    />
                  </div>
                  <Link to="/" className="mb-4" onClick={() => setOpen(false)}>
                    <Logo />
                  </Link>
                  <ul className="flex flex-col gap-5 text-center">
                    <li>
                      <Link to="/products" onClick={() => setOpen(false)}>
                        {" "}
                        Products{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setOpen(false)}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        className="nav--shopping-cart"
                        onClick={() => setOpen(false)}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="nav--shopping-cart-count">
                          {carts.reduce(
                            (total, item) => total + item.quantity,
                            0
                          )}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
