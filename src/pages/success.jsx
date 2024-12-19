import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function SuccessPage() { 
return (
  <div className="flex flex-col items-center gap-5 ">
    <AiFillCheckCircle className="text-5xl text-green-500" />
    <h1 className="text-green-500 text-4xl">Form submitted successfully</h1>
    <p>
      {" "}
      The form has been submitted correctly and we will reply within now and 24
      hours to your request.{" "}
    </p>
    <Link className="text-slate-300 underline" to="/contact/">
      {" "}
      Go back{" "}
    </Link>
  </div>
);
}