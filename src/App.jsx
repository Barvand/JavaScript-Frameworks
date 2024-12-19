import { useLocation } from "react-router-dom";
import { Navigation } from "./components/nav";
import { ProductsPage } from "./pages/products";
import { ContactPage } from "./pages/contact";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage.jsx";
import { ShoppingCart } from "./pages/ShoppingCart.jsx";
import SideCartMenu from "./components/cart-side-menu.jsx";
import Footer from "./components/footer.jsx";
import SuccessPage from "./pages/success.jsx";
import CompletedOrder from "./pages/Completed.jsx";

const hideMenuOnCartPage = ["/cart"]; // Define routes where the menu is hidden

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Navigation />
      {/* Conditionally render SideCartMenu */}
      {!hideMenuOnCartPage.includes(location.pathname) && <SideCartMenu />}
      <div className="container p-2 mt-5 flex flex-col">
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/contact/success/" element={<SuccessPage />} />
          <Route path="/cart/complete/" element={<CompletedOrder />} />
        </Routes>
      </div>
      <Footer className="flex-end" />
    </>
  );
}

export default App;
