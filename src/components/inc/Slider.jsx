// import React from "react";

import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles

import Slider1 from "../images/Me.jpg";
import Slider2 from "../images/DSC_5678.jpg";
import Slider3 from "../images/DSC_5738.jpg";

function Slider() {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });

    // Manually trigger the next slide every 2000 milliseconds
    const autoplayInterval = setInterval(() => {
      swiper.slideNext();
    }, 2000);

    // Clean up Swiper instance and interval when the component unmounts
    return () => {
      swiper.destroy();
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={Slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="swiper-slide">
          <img src={Slider2} className="d-block w-100" alt="..." />
        </div>
        <div className="swiper-slide">
          <img src={Slider3} className="d-block w-100" alt="..." />
        </div>
      </div>
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
}

export default Slider;
