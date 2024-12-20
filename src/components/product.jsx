import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore } from "../store/cart";

export function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  let { id } = useParams();

  const { addToCart } = useCartStore();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="md:container-md grid grid-cols-12 grid-rows-2 gap-4 mt-5">
      {/* Image Section */}
      <div
        key={data.id}
        className="col-span-12 md:col-span-8 bg-black flex items-center justify-center rounded h-96"
      >
        <div className="w-full h-full">
          <img
            className="drop-shadow-md object-contain w-full h-full rounded"
            src={data.image.url}
            alt={data.image.alt}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="col-span-12 md:col-span-4 p-4 rounded">
        <h2 className="title text-2xl font-bold mb-2 gradient-border-bottom-yellow">
          {data.title}
        </h2>
        <p>
          {data.rating === 0 ? (
            <div className="text-slate-500">No rating yet</div>
          ) : (
            <>
              {data.rating}
              {[...Array(Math.floor(data.rating))].map((_, index) => (
                <i key={index} className="fa-solid fa-star text-yellow-500"></i>
              ))}
              {data.rating % 1 !== 0 && (
                <i className="fa-solid fa-star-half-alt text-yellow-500"></i>
              )}
            </>
          )}
        </p>
        <p className="mt-2">{data.description}</p>
        <div className="product-prices flex gap-2 mt-4 flex-wrap">
          {data.discountedPrice === data.price ? (
            <span className="text-green-500 font-bold">${data.price}</span>
          ) : (
            <>
              <span className="text-green-500 font-bold">
                ${data.discountedPrice}
              </span>
              <span className="text-red-500 ml-2">before</span>
              <span className="text-red-500 line-through">${data.price}</span>
              <span className="ml-2 bg-secondary font-bold text-neon p-1">
                {Math.round(
                  ((data.price - data.discountedPrice) / data.price) * 100
                )}
                % Off!
              </span>
            </>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="font-bold py-2 px-4 rounded gradient-border-bottom"
            onClick={() => addToCart(data)}
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="col-span-12 gradient-border-bottom-top">
        <Reviews reviews={data.reviews} />
      </div>
    </div>
  );
}

export function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <div>No reviews yet.</div>;
  }

  return (
    <>
    <h2 className="text-3xl py-3 mt-5">What do our customers say?</h2>
    <div className="flex gap-2 flex-wrap sm:items-center">
      {reviews.map((review, index) => (
        <div key={index} className="col-span-3 p-2 w-96 border rounded border-slate-800">
          <p className="text-xl">{review.username}</p>
          <p>
            <span className="stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </span>
          </p>
          <p>{review.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}
