import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-yellow-400">
      <div className="md:container">
        <ul className="flex py-2 justify-end gap-5">
          <li className="flex-1">
            <Link to="/">Dikke lullen club</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <Link to="/cart" className="nav--shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="nav--shopping-cart-count"> 0 </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
