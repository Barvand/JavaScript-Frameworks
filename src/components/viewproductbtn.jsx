import { Link } from "react-router-dom";

export default function ViewProductBtn({ id }) {
  return (
    <Link
      to={`/products/${id}`} // Use template literals to create the dynamic link
      className="bg-transparent hover:bg-yellow-200 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      View product
    </Link>
  );
}
