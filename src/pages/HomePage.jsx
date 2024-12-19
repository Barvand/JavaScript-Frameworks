import { useState, useEffect } from "react";
import { ProductCards } from "../components/ProductCards.jsx";
import Hero from "../components/Hero.tsx";

export function Home() {
  // const [showContent, setShowContent] = useState(false);

  // // // Trigger the transition to the main content after a delay
  // // useEffect(() => {
  // //   const timer = setTimeout(() => {
  // //     setShowContent(true); // After 3 seconds, show the main content
  // //   }, 8000);

  // //   return () => clearTimeout(timer); // Clean up the timer on unmount
  // // }, []);

  return (
    <>
      {/* Initial Text that covers the full body 
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-gray-300 text-3xl font-bold">
          <h1 className="typewriter">
          Are you ready for a mind-blowing shopping experience?
          </h1>
        </div>
      )}}
      {/* Main Content */}
      <Hero />
      <div className="container mt-10">
        <ProductCards />
      </div>
      {/* Your main content component */}
    </>
  );
}
