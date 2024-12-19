import { AiFillThunderbolt } from "react-icons/ai";

export default function ContactCards() {
  return (
    <>
      <div className="bg-purple-500 md:h-auto col-span-12 lg:col-span-6 lg:h-64 rounded p-6 grid font-semibold">
        <div className="flex items-center">
          {/* Icon Section */}
          <div className="flex-shrink-1">
            <AiFillThunderbolt className="text-5xl text-yellow-500" />
          </div>
          {/* Text Section */}
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-yellow-500 mb-2">
              Contact Timeless
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, reprehenderit in voluptate.
            </p>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 col-span-12 lg:col-span-6 rounded lg:h-64 p-6 grid font-semibold">
        <div className="flex items-center">
          {/* Icon Section */}
          <div className="flex-shrink-1">
            <AiFillThunderbolt className="text-5xl text-purple-500" />
          </div>
          {/* Text Section */}
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-purple-500 mb-2">
              Contact Timeless
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, reprehenderit in voluptate.
            </p>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
