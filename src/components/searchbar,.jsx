import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://v2.api.noroff.dev/online-shop";
        const response = await fetch(url);
        const results = await response.json();

        // Ensure results.data is an array
        const products = Array.isArray(results.data) ? results.data : [];
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Oops, something went wrong: {error}</div>;
  }

  // Filter products based on the search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-end relative">
        <div className="flex flex-col px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden w-96">
          {/* Search input */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Find what you are looking for"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-600 text-sm font-roboto text-white"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-white"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>

          {/* Only display search results if there is a search term */}
          {search && (
            <div className="absolute bg-primary top-full righ-0 border-2 border-blue-500 rounded-md mt-1 z-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-full px-4 py-2 hover:bg-gray-800"
                  >
                    <Link
                      to={`/products/${product.id}`}
                      onClick={() => setSearch("")}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={product.image.url}
                        alt={product.image.alt}
                        className="h-10 w-10 object-cover"
                      />
                      <p className="font-bold text-white">{product.title}</p>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-white">No products found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
