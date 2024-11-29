import { useState } from "react";
import { Navigation } from "./components/nav";
import { ProductsPage } from "./pages/products";
import { ContactPage } from "./pages/contact";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="md:container">
          <Routes>
            {/* Define the Route for ContactPage */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
