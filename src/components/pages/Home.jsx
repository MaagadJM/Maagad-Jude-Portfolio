import React, { useState } from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../images/03_Maagad_Jude_Michael_LE2.png";

function Home({ setActiveLink }) {
  // const [activeLink, setActiveLink] = useState(null);

  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  // };

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
    <div>
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
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
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

      {/* My VISION, MISSION and VALUES */}
      <VMC />

      {/* My Services */}

      <section className="section border-top">
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
    </div>
  );
}

export default Home;
