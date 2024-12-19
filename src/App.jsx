import { useLocation } from "react-router-dom";
import { Navigation } from "./components/Nav.jsx";
import { ProductsPage } from "./pages/Products.jsx";
import { ContactPage } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { ShoppingCart } from "./pages/ShoppingCart.jsx";
import SideCartMenu from "./components/CartSideMenu.jsx";
import Footer from "./components/Footer.jsx";
import SuccessPage from "./pages/Success.jsx";

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
          
        </Routes>
      </div>
      <Footer className="flex-end" />
    </>
  );
}

export default App;
