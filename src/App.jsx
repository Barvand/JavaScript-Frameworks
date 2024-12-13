import { useState } from "react";
import { Navigation } from "./components/nav";
import { ProductsPage } from "./pages/products";
import { ContactPage } from "./pages/contact";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage.jsx";
import { ShoppingCart } from "./pages/ShoppingCart.jsx"
import SideCartMenu from "./components/cart-side-menu.jsx";
import Footer from "./components/footer.jsx";

// import SideCartMenu from "./components/cart-side-menu.jsx";


function App() {
  return (
    <>
      <Router>
        <Navigation />
        <SideCartMenu />
        {/* <SideCartMenu/> */}
        <div className="container p-2 mt-5">
          <Routes>
            {/* Define the Route for ContactPage */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<ShoppingCart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
