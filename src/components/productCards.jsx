import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddToCartBtn } from "./cartButton";
import ViewProductBtn from "./viewproductbtn";

export function ProductCards() {
  const [products, setProducts] = useState([]); // State to hold products
  const [originalProducts, setOriginalProducts] = useState([]); // State to hold the original (unsorted) products
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // Set error message
  const [isActive, setIsActive] = useState(""); // State to track the active filter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://v2.api.noroff.dev/online-shop";
        const response = await fetch(url);
        const results = await response.json();

        // Ensure results.data is an array
        const data = Array.isArray(results.data) ? results.data : [];
        setProducts(data);
        setOriginalProducts(data); // Store the original products array
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs once

  // Function to sort products by price
  const resetProducts = () => {
    setProducts(originalProducts); // Reset products to original state
    setIsActive("isActive"); // Clear the active filter
  };

  const sortProducts = (type) => {
    if (type === "low") {
      setProducts([...products].sort((a, b) => a.price - b.price)); // Sorting logic
    } else if (type === "high") {
      setProducts([...products].sort((a, b) => b.price - a.price)); // Sorting logic
    }
    setIsActive(type); // Set active filter to "low" or "high"
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops, something went wrong: {error}</div>;
  }

  return (
    <>
      <div className="bg-slate-300 flex">
        {/* Button to reset the products to the original state */}
        <button
          onClick={resetProducts}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "isActive" ? "isActive" : ""
          }`}
        >
          All products
        </button>

        {/* Filter buttons */}
        <button
          onClick={() => sortProducts("low")}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "low" ? "isActive" : ""
          }`}
        >
          Lowest Price
        </button>
        <button
          onClick={() => sortProducts("high")}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "high" ? "isActive" : ""
          }`}
        >
          Highest Price
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2"
          >
            <div className="img-container">
              <img
                className="product-image object-cover h-48 w-96"
                src={product.image.url}
                alt={product.image.alt}
              ></img>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-prices flex gap-2">
              <p className="text-green-700 font-bold">
                {product.discountedPrice}
              </p>
              <p>{product.price}</p>
            </div>
            <div className="add-to-cart flex gap-2 mt-2">
              <AddToCartBtn />
              <ViewProductBtn id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
