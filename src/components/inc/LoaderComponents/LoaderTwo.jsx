import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoaderTwo = () => {
  const loadertwoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#loadertwo p",
      // ============= BOTH WORKING WITH OR WITHOUT CURLY BRACES ============ //
      { x: 40, opacity: 0 }, // from
      { x: 0, opacity: 1, duration: 1.5, stagger: 0.3 } // To
    ); // Increase duration for testing

    tl.to("#loadertwo p", {
      x: -10,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });

    // tl.to("#loadertwo", {
    //   opacity: 0,
    // });
    // ============= BOTH WORKING WITH OR WITHOUT CURLY BRACES END ============ //
    if (loadertwoRef.current) {
      console.log("Element found:", loadertwoRef.current);
    } else {
      console.log("Element not found");
    }
  }, []);

  return (
    <section
      id="loadertwo"
      className="h-screen w-screen bg-[#18181B] z-50 content-center"
    >
      <section className="flex justify-center  text-yellow-400 gap-2">
        <p ref={loadertwoRef}>Jude</p>
        <p>Michael</p>
        <p>Maagad</p>
      </section>
    </section>
  );
};

export default LoaderTwo;
