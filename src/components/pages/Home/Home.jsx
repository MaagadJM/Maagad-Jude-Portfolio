import React, { useState, useEffect } from "react";
import Slider from "../../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";
import Projects from "../MyProjects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Service1 from "/Thumbnails/HSI thumbnail.png";
import MeCropped from "../../images/MeCropped.jpg";

import { feicons } from "../Carousel/feicons";

import RHouseMount from "/right house mountain.png";
import BlackedManMount from "/blacked man_on_mountain.png";

import BackToTop from "../../inc/BackToTop";

function Home({ setActiveLink }) {
  // const [activeLink, setActiveLink] = useState(null);

  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  // };

  useEffect(() => {
    AOS
      .init
      //   {
      //   duration: 1200, // Animation duration in milliseconds
      //   // offset: 200, // Offset in pixels from the original trigger point
      //   delay: 100, // Delay in milliseconds before the animation starts
      //   easing: "ease-in-out", // Easing function for the animation
      //   once: false,
      // }
      ();
    // AOS.refresh();
  }, []);

  // ======== Parallax Scrolling ========= //
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ======== Parallax Scrolling END ========= //

  const handleReadMoreClick = () => {
    // Set the active link to 1 (index of "About Me" in the Navbar)
    setActiveLink(1);

    // Manually add the active class to the About Me link
    const aboutLink = document.querySelector(".nav-link[href='/about']");
    if (aboutLink) {
      aboutLink.classList.add("active");
    }
  };

  return (
    <>
      {/* ========================= FIRST SECTION ========================== */}

      <div
        id="first-sect"
        className="xxs:h-[140vh] sm:h-[92vh] xl:h-[95vh] w-screen sm:content-center"
        // style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      >
        <section className="container grid lg:grid-cols-2 relative lg:mx-20 pt-16 gap-x-12 xxs:gap-y-10 sm:gap-y-0 ">
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="flex items-center justify-center"
          >
            <img
              src={MeCropped}
              alt=""
              className=" rounded-[50%] xxs:h-48 md:h-80 lg:h-96 f-image-shadow spin-hover"
              style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
            />
          </section>

          <section
            className="xxs:text-center lg:text-start place-content-center "
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          >
            <p
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="text-[#FFF5EA] text-4xl font-light"
            >
              Jude Michael Maagad
            </p>
            <br />
            <p
              data-aos="fade-left"
              data-aos-delay="1500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="text-4xl font-light"
            >
              Front-End Web Developer <br /> & <br /> UI | UX Designer.
            </p>
            <br /> <br />
            <p
              data-aos="fade-left"
              data-aos-delay="2000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="text-2xl font-light"
            >
              I design and develop high-end web experiences for <br />
              design-driven companies that value attention to detail.
            </p>
          </section>
        </section>

        {/* <img
          src={RHouseMount}
          alt=""
          className="h-[30vh] absolute right-0 top-[60vh]"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />

        <img
          src={BlackedManMount}
          alt=""
          className="h-[20vh] absolute left-0 top-[90vh]"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        /> */}
      </div>

      {/* ========================= FIRST SECTION END ========================== */}
      <section
        id="extras-sect"
        className=" flex space-x-16 overflow-hidden group"
      >
        <section className=" flex animate-loop-scroll space-x-16 items-center group-hover:paused">
          {feicons.map((feicon) => (
            // <div key={feicon.id} className="extras-slide xxs:mx-1 sm:mx-3">
            <div key={feicon.id} className="" aria-hidden="true">
              <img
                src={feicon.imagePath}
                alt="products"
                className="max-w-none mx-14"
              />
            </div>
          ))}
        </section>
      </section>

      {/* ============================= PROJECT SECTION ============================== */}
      <Projects />
      {/* ============================= PROJECT SECTION ============================== */}

      {/* ========================= THIRD SECTION ========================== */}

      {/* <section
        className=""
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Slider /> */}

      {/* <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h2>Home Page</h2>
          </div>
        </div>
       </div> */}

      {/* <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading">Our Company</h3>
                <div className="underline mx-auto"></div>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link
                  to="/about"
                  className="btn btn-warning"
                  onClick={handleReadMoreClick}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section> */}

      {/* ========================= THIRD SECTION END ========================== */}

      {/* My VISION, MISSION and VALUES */}
      {/* <VMC /> */}

      {/* My Services */}

      {/* <section
        className="section border-top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">My Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service1} className="w-100 border-bottom" alt="" />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <Link to="/" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service1} className="w-100 border-bottom" alt="" />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <Link to="/" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service1} className="w-100 border-bottom" alt="" />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <Link to="/" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <BackToTop />
    </>
  );
}

export default Home;
