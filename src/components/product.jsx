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
      <div
        key={data.id}
        className="col-span-12 md:col-span-8 bg-slate-100 flex items-center justify-center rounded"
      >
        <img
          className="w-1/2 content-center py-2 justify-center drop-shadow-md"
          src={data.image.url}
          alt={data.image.alt}
        />
      </div>
      <div className="col-span-12 md:col-span-4">
        <h2 className="title">{data.title} </h2>
        <p>
          {data.rating === 0 ? (
            <div className="text-slate-500"> No rating yet </div>
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
        <p>{data.description}</p>
        <div className="product-prices flex gap-2">
          <p>
            {data.discountedPrice === data.price ? (
              <span className="font-bold">{data.price}</span> // Display only price if no discount
            ) : (
              <>
                <span className="text-red-500 font-bold">
                  {data.discountedPrice}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  {data.price}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            className="font-bold py-2 px-4 rounded gradient-border-bottom"
            onClick={() => addToCart(data)}
          > Add to cart </button> 
        </div>
      </div>
      <div className="col-span-12">
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
    <div className="col-span-12">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="bg-green-200">
          <p>{review.username}</p>
          <p>{review.description}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}
