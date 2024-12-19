import { useLocation } from "react-router-dom";
import { Nav } from "./components/nav.jsx";
import { ProductsPage } from "./pages/ProductCards.jsx";
import { ContactPage } from "./pages/ContactPage.jsx"; 
import { Home } from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { ShoppingCart } from "./pages/CartPage.jsx";
import SideCartMenu from "./components/CartSideMenu.jsx";
import Footer from "./components/Footer.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import CompletedOrder from "./pages/Completed.jsx";

const hideMenuOnCartPage = ["/cart"]; // Define routes where the menu is hidden

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Nav />
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
