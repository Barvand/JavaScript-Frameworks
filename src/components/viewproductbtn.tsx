import { Link } from "react-router-dom";

interface ViewProductBtnProps {
  id: string;
}

export default function ViewProductBtn({ id }: ViewProductBtnProps) {
  return (
    <Link
      to={`/products/${id}`} 
      className="text-neutral font-bold py-2 px-4 rounded gradient-border-bottom-pink"
    >
      View product
    </Link>
  );
}