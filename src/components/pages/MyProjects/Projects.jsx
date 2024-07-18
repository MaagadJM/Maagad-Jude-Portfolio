import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Service1 from "/Thumbnails/HSI thumbnail.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
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

  return (
    <>
      {/* ========================= PROJECT SECTION ========================== */}

      <section
        id="second-sect"
        className="section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="py-5">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-[15%]">
            <div className=" custom-border px-1">
              <a
                href="https://maagadjm.github.io/Maagad-HSI-Engage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <div className="col-md-4 rounded-3xl border border-yellow-500"> */}
                <img
                  src={Service1}
                  className="w-full h-[70%] border-bottom rounded-t-md cursor-pointer"
                  alt="HSI Engage"
                />
              </a>
              <section className="card-body mt-[22px]">
                <h4 className="text-[#FFF5EA]">HSI Engage</h4>
                <div className="underline"></div>
                <p className="text-[#FFF5EA]">
                  Developed a web page for Highly Succeed Inc as their Front End
                  Web Developer Intern.
                </p>
                {/* <Link to="/" className="btn btn-link">
                  read more
                </Link> */}
              </section>
              {/* </a> */}
            </div>

            <div className=" custom-border px-1">
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

            <div className=" custom-border px-1 ">
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

            <div className=" custom-border px-1 ">
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

      {/* ========================= SECOND SECTION END ========================== */}
    </>
  );
}

export default Projects;
