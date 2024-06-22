import React, { useState, useEffect } from "react";
import Slider from "../../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";
import AOS from "aos";
import "aos/dist/aos.css";
import Service1 from "../../images/03_Maagad_Jude_Michael_LE2.png";
import MeCropped from "../../images/MeCropped.jpg";

function Home({ setActiveLink }) {
  // const [activeLink, setActiveLink] = useState(null);

  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  // };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      // offset: 200, // Offset in pixels from the original trigger point
      delay: 100, // Delay in milliseconds before the animation starts
      easing: "ease-in-out", // Easing function for the animation
      once: false,
    });
    AOS.refresh();
  }, []);

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
      <div
        className="container h-[92vh] xl:h-[95vh] content-center"
        // data-aos="fade-up"
      >
        <section className="grid lg:grid-cols-2 relative bottom-6 lg:mx-20 mt-16 gap-x-12 xxs:gap-y-10 sm:gap-y-0 ">
          <section
            data-aos="fade-up"
            className="flex items-center justify-center"
          >
            <img
              src={MeCropped}
              alt=""
              className=" rounded-[50%] xxs:h-48 md:h-80 lg:h-96 image-shadow hover-shadow spin-hover"
            />
          </section>

          <section className="xxs:text-center lg:text-start place-content-center h-96">
            <h3
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-yellow-600"
            >
              Jude Michael Maagad
            </h3>
            <br />
            <section
              data-aos="fade-down"
              data-aos-delay="1000"
              className="text-4xl"
            >
              Front-End Web Developer <br /> & <br /> UI | UX Designer.
            </section>
            <br /> <br />
            <section
              data-aos="fade-down"
              data-aos-delay="1500"
              className="text-lg"
            >
              I design and develop high-end web experiences for design-driven
              companies that value attention to detail.
            </section>
          </section>
        </section>
      </div>

      <section>
        <Slider />

        {/* <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h2>Home Page</h2>
          </div>
        </div>
       </div> */}

        <section className="section">
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
      </section>

      {/* My VISION, MISSION and VALUES */}
      <VMC />

      {/* My Services */}

      <section className="section border-top" data-aos="fade-up">
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
      </section>
    </>
  );
}

export default Home;
