import React from "react";
import MobileAnimation from "../svg/mobile-animation";

interface Hero {}

export default function Hero() {
  return (
    <>
      <section className="gradient-border-bottom-yellow pb-8 grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 mb-10">
        <div className="mr-auto place-self-center lg:col-span-6 text-center">
          <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-koulen">
            Great deals!
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            Welcome to the
            <span className="text-neon font-bold"> greatest </span> shopping
            platform on the
            <span className="text-secondary font-bold"> planet</span>, Timeless
            has all types of timeless offers for all our users.
          </p>
          {/* <MobileAnimation/> */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img
            className="w-100 object-cover"
            src="/jezael-melgoza-lay.jpg"
            alt="people-shopping-tokyo"
          ></img>
        </div>
      </section>
    </>
  );
}
