import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CompletedOrder() {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <AiFillCheckCircle className="text-5xl text-green-500" />
      <h1 className="text-green-500 text-4xl">Order submitted successfully</h1>
      <p>
        {" "}
        We have received your order, you will receive an order confirmation
        shortly.
      </p>
      <Link className="text-slate-300 underline" to="/">
        {" "}
        Return to homepage{" "}
      </Link>
    </div>
  );
}
