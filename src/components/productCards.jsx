import { useState, useEffect } from "react";
import ViewProductBtn from "./viewproductbtn";
import { useCartStore } from "../store/cart";

export function ProductCards() {
  const [products, setProducts] = useState([]); // State to hold products
  const [originalProducts, setOriginalProducts] = useState([]); // State to hold the original (unsorted) products
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // Set error message
  const [isActive, setIsActive] = useState(""); // State to track the active filter
  const { addToCart } = useCartStore();

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
      {/* <div className="flex">
        <button
          onClick={resetProducts}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "isActive" ? "isActive" : ""
          }`}
        >
          All products
        </button>

        {/* Filter buttons */}
        {/* <button
          onClick={() => sortProducts("low")}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "low" ? "isActive" : ""
          }`}
        > */}
          {/* Lowest Price
        </button>
        <button
          onClick={() => sortProducts("high")}
          className={`border-solid border-2 border-gray-600 p-1 ${
            isActive === "high" ? "isActive" : ""
          }`}
        >
          Highest Price
        </button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-2 relative">
            <div className="img-container">
              <img
                className="product-image object-cover h-48 w-full"
                src={product.image.url}
                alt={product.image.alt}
              ></img>
            </div>
            <div className="max-height-cards">
              <h3 className="py-4 text-xl font-bold dark:text-white gradient-border-bottom">
                {product.title}
              </h3>
              <div className="py-4">
                <p className="py-2">{product.description}</p>
                <div className="product-prices flex gap-2">
                  <p className="text-green-500 font-bold">
                    {product.discountedPrice === product.price ? (
                      // No discount case: Display only the regular price
                      <span className="font-bold">${product.price}</span>
                    ) : (
                      <>
                        <span className="text-green-500 font-bold">
                          ${product.discountedPrice}
                        </span>
                        <span className="text-red-500 ml-2">
                          before </span> 
                          <span className="text-red-500 line-through">
                          ${product.price}
                        </span>
                        <span className="ml-2 absolute bg-secondary right-0 top-0 w-full font-bold text-neon p-1 text-center">
                          {Math.round(
                            ((product.price - product.discountedPrice) /
                              product.price) *
                              100
                          )}
                          % Off!
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <button
                className="font-bold py-2 px-4 rounded gradient-border-bottom"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
              <ViewProductBtn id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
