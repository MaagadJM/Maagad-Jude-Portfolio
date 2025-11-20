import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import VMC from "../inc/Vmc";
import STIGradPic from "../../images/STI Gradpic.jpg";

import AwsPythonML from "/Thumbnails/AWS and Python.png";
import OracleSqlTN from "/Thumbnails/Oracle SQL.jpg";

import CCNA_IP_SubnettingTN from "/Thumbnails/Master IP Addressing and Subnetting for CCNA TN.png";

// import SAPBasic from "/PDF/SAP Advance (Implementation & Support) Certificate - Maagad.pdf";
import SAPBasicTN from "/Thumbnails/SAP Basic Thumbnail.png";
import SAPAdvanceTN from "/Thumbnails/SAP Advance Thumbnail.png";

import HUAWEInetworkfoundation from "/Thumbnails/HUAWEI Network Foundations TN.png";
import TikTalksCert from "/Thumbnails/TIK TALKS USAID TN.png";

import BackToTopButton from "../../inc/BackToTop";

function Aboutme() {
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

  return (
    <div className="bg-[#18181b] text-[#FFF5EA]">
      {/* <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> About Me</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About Me</h6>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-24">
        <div className="container">
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <p className="text-3xl font-light">About Me</p>
            <div className="underline"></div>
          </section>
          <section className="grid lg:grid-cols-2 gap-16 my-20 items-center">
            <section
              className="xxs:text-center lg:text-start place-content-center "
              // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
              <p
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className="text-4xl font-light text-yellow-600"
              >
                I am Jude Michael Maagad.
              </p>
              <br />
              <p
                data-aos="fade-right"
                data-aos-delay="1800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                A creative developer with a passion for design and development.
                From concept to launch, I contribute to the entire front-end
                development process, from design to implementation.
              </p>
              <br />
              <p
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                User experience, visually striking design, engaging interactions
                and impeccable typography are my top priorities. Additionally, I
                have successfully utilized Blender to create 3D models for logo
                animations, and have employed Figma for UI/UX design in client
                projects.
              </p>
              <br />
              <p
                data-aos="fade-right"
                data-aos-delay="2200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                I possess experience in SAP systems, having obtained both basic
                and advanced certifications.
              </p>
              <br />
              <p
                data-aos="fade-right"
                data-aos-delay="2200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                Furthermore, I have a strong foundation in cloud computing, with
                hands-on experience utilizing both AWS and Huawei Cloud
                platforms.
              </p>
            </section>

            <section
              data-aos="fade-left"
              data-aos-delay="2400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.facebook.com/photo.php?fbid=958532199616855&set=a.958537279616347&type=3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={STIGradPic}
                  alt=""
                  className="rounded-[5%] xxs:h-full md:h-80 lg:h-[80%] a-image-shadow spin-hover"
                  // style={{ transform: `translateY(${offsetY * 0.4}px)` }}
                />
              </a>
            </section>

            {/* ================= MY CERTIFICATES ================ */}

            <section
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="lg:col-span-2 base:mt-10 lg:mt-36 "
              // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
              <p className="text-3xl font-light">Mind Luster Certificate</p>
              <div className="underline"></div>
            </section>

            <section
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.mindluster.com/student/certificate/22b23400"
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={AwsPythonML}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.1}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

                        <section
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.mindluster.com/student/certificate/783d2b05"
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={OracleSqlTN}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.1}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="lg:col-span-2 base:mt-10 lg:mt-36 "
              // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
              <p className="text-3xl font-light">MNET Certificate for CCNA</p>
              <div className="underline"></div>
            </section>

            <section
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/22311/certificates/52583/10397536_52583.pdf?1725533561"
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={CCNA_IP_SubnettingTN}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.1}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="lg:col-span-2 base:mt-10 lg:mt-36 "
              // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
              <p className="text-3xl font-light">SAP Certificates</p>
              <div className="underline"></div>
            </section>

            <section
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href={SAPBasicTN}
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={SAPBasicTN}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.1}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />

                {/* ---------- for external page view ---------- */}
                {/* <img
                  src={ThumbnailSAPBasic}
                  alt="Certificate Thumbnail"
                  className="rounded-[5%] xxs:h-48 md:h-80 lg:h-[80%] a-image-shadow spin-hover"
                  style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
                /> */}
                {/* ---------- for external page view end ---------- */}

                {/* ---------- for internal page view ---------- */}
                {/* <iframe
                  src={SAPBasic}
                  alt=""
                  className="rounded-[5%] h-[60vh] w-[50vw]  a-image-shadow spin-hover"
                  style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
                  allowfullscreen
                /> */}
                {/* ---------- for internal page view end ---------- */}
              </a>
            </section>

            <section
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href={SAPAdvanceTN}
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={SAPAdvanceTN}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%] spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.3}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="lg:col-span-2 base:mt-10 lg:mt-36 "
              // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
              <p className="text-3xl font-light">Other Certificates</p>
              <div className="underline"></div>
            </section>

            <section
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href={HUAWEInetworkfoundation}
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={HUAWEInetworkfoundation}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%] spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.3}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

            <section
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-center"
            >
              <a
                href={TikTalksCert}
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="a-image-shadow rounded-[1%]"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={TikTalksCert}
                  alt="Certificate Thumbnail"
                  className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%] spin-hover"
                  style={{
                    // transform: `translateY(${offsetY * 0.3}px)`,
                    pointerEvents: "none",
                    display: "block",
                  }}
                  draggable="false"
                />
              </a>
            </section>

            {/* ================= MY CERTIFICATES END ================ */}
          </section>
        </div>
      </section>

      {/* =========================================== */}

      <div className="py-28 mt-[13rem]" id="second-sect">
        <div className="flex flex-col mx-[15%]">
          <div className=" custom-border px-1">
            <section className="h-full content-center">
              {/* <a
                  href="https://maagadjm.github.io/Maagad-HSI-Engage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HSIEngage}
                    className="w-full h-[70%] rounded-t-md cursor-pointer"
                    alt="HSI Engage"
                  />
                </a> */}
              <section className="mx-16">
                <svg
                  className="smiley"
                  width="66"
                  height="126"
                  viewBox="0 0 66 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7784 97.5682C12.0265 97.5682 10.5232 96.9408 9.26847 95.6861C8.01373 94.4313 7.38636 92.928 7.38636 91.1761C7.38636 89.4242 8.01373 87.9209 9.26847 86.6662C10.5232 85.4115 12.0265 84.7841 13.7784 84.7841C15.5303 84.7841 17.0336 85.4115 18.2884 86.6662C19.5431 87.9209 20.1705 89.4242 20.1705 91.1761C20.1705 92.3362 19.8745 93.4015 19.2827 94.3722C18.7145 95.3428 17.9451 96.1241 16.9744 96.7159C16.0275 97.2841 14.9621 97.5682 13.7784 97.5682ZM13.7784 57.0852C12.0265 57.0852 10.5232 56.4579 9.26847 55.2031C8.01373 53.9484 7.38636 52.4451 7.38636 50.6932C7.38636 48.9413 8.01373 47.438 9.26847 46.1832C10.5232 44.9285 12.0265 44.3011 13.7784 44.3011C15.5303 44.3011 17.0336 44.9285 18.2884 46.1832C19.5431 47.438 20.1705 48.9413 20.1705 50.6932C20.1705 51.8532 19.8745 52.9186 19.2827 53.8892C18.7145 54.8598 17.9451 55.6411 16.9744 56.233C16.0275 56.8011 14.9621 57.0852 13.7784 57.0852Z"
                    fill="#CA8B04"
                  />
                  <path
                    d="M54.5682 71.3182C54.5682 80.267 53.3963 88.5057 51.0526 96.0341C48.7325 103.539 45.4063 110.452 41.0739 116.773H33.6875C35.392 114.429 36.9782 111.541 38.446 108.108C39.9375 104.699 41.2396 100.958 42.3523 96.8864C43.465 92.7907 44.3291 88.5649 44.9446 84.2088C45.5838 79.8291 45.9034 75.5322 45.9034 71.3182C45.9034 65.6837 45.3589 59.9664 44.2699 54.1662C43.1809 48.366 41.7131 42.9801 39.8665 38.0085C38.0199 33.0369 35.9602 28.9886 33.6875 25.8636H41.0739C45.4063 32.1847 48.7325 39.1094 51.0526 46.6378C53.3963 54.1425 54.5682 62.3693 54.5682 71.3182Z"
                    fill="#CA8B04"
                  />
                </svg>

                <section className="flex gap-x-6">
                  {/* HSI Engage */}
                  <svg
                    className="coming"
                    width="403"
                    height="75"
                    viewBox="0 0 403 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M62.3295 24H53.5227C53.0019 21.4669 52.0904 19.2415 50.7884 17.3239C49.5099 15.4062 47.9474 13.7964 46.1009 12.4943C44.2779 11.1686 42.2538 10.1742 40.0284 9.51136C37.803 8.84848 35.483 8.51704 33.0682 8.51704C28.6648 8.51704 24.6757 9.62973 21.1009 11.8551C17.5497 14.0805 14.7206 17.3594 12.6136 21.6918C10.5303 26.0241 9.48864 31.339 9.48864 37.6364C9.48864 43.9337 10.5303 49.2486 12.6136 53.581C14.7206 57.9134 17.5497 61.1922 21.1009 63.4176C24.6757 65.643 28.6648 66.7557 33.0682 66.7557C35.483 66.7557 37.803 66.4242 40.0284 65.7614C42.2538 65.0985 44.2779 64.116 46.1009 62.8139C47.9474 61.4882 49.5099 59.8665 50.7884 57.9489C52.0904 56.0076 53.0019 53.7822 53.5227 51.2727H62.3295C61.6667 54.9896 60.4593 58.3158 58.7074 61.2514C56.9555 64.187 54.7775 66.6847 52.1733 68.7443C49.5691 70.7803 46.6454 72.331 43.402 73.3963C40.1823 74.4616 36.7377 74.9943 33.0682 74.9943C26.8655 74.9943 21.3494 73.4792 16.5199 70.4489C11.6903 67.4186 7.89063 63.1098 5.12074 57.5227C2.35085 51.9356 0.965909 45.3068 0.965909 37.6364C0.965909 29.9659 2.35085 23.3371 5.12074 17.75C7.89063 12.1629 11.6903 7.85417 16.5199 4.82386C21.3494 1.79356 26.8655 0.278406 33.0682 0.278406C36.7377 0.278406 40.1823 0.811077 43.402 1.87642C46.6454 2.94176 49.5691 4.50426 52.1733 6.56392C54.7775 8.5999 56.9555 11.0857 58.7074 14.0213C60.4593 16.9332 61.6667 20.2595 62.3295 24ZM137.924 37.6364C137.924 45.3068 136.539 51.9356 133.77 57.5227C131 63.1098 127.2 67.4186 122.37 70.4489C117.541 73.4792 112.025 74.9943 105.822 74.9943C99.6194 74.9943 94.1033 73.4792 89.2738 70.4489C84.4442 67.4186 80.6445 63.1098 77.8746 57.5227C75.1048 51.9356 73.7198 45.3068 73.7198 37.6364C73.7198 29.9659 75.1048 23.3371 77.8746 17.75C80.6445 12.1629 84.4442 7.85417 89.2738 4.82386C94.1033 1.79356 99.6194 0.278406 105.822 0.278406C112.025 0.278406 117.541 1.79356 122.37 4.82386C127.2 7.85417 131 12.1629 133.77 17.75C136.539 23.3371 137.924 29.9659 137.924 37.6364ZM129.402 37.6364C129.402 31.339 128.348 26.0241 126.241 21.6918C124.158 17.3594 121.329 14.0805 117.754 11.8551C114.203 9.62973 110.225 8.51704 105.822 8.51704C101.419 8.51704 97.4296 9.62973 93.8548 11.8551C90.3036 14.0805 87.4746 17.3594 85.3675 21.6918C83.2842 26.0241 82.2425 31.339 82.2425 37.6364C82.2425 43.9337 83.2842 49.2486 85.3675 53.581C87.4746 57.9134 90.3036 61.1922 93.8548 63.4176C97.4296 65.643 101.419 66.7557 105.822 66.7557C110.225 66.7557 114.203 65.643 117.754 63.4176C121.329 61.1922 124.158 57.9134 126.241 53.581C128.348 49.2486 129.402 43.9337 129.402 37.6364ZM152.733 1.27273H163.244L187.96 61.642H188.812L213.528 1.27273H224.039V74H215.801V18.7443H215.091L192.363 74H184.409L161.681 18.7443H160.971V74H152.733V1.27273ZM250.504 1.27273V74H241.697V1.27273H250.504ZM325.833 1.27273V74H317.31L277.679 16.8977H276.969V74H268.162V1.27273H276.685L316.458 58.517H317.168V1.27273H325.833ZM393.171 24C392.39 21.6089 391.36 19.4664 390.082 17.5724C388.827 15.6548 387.324 14.0213 385.572 12.6719C383.844 11.3224 381.879 10.2926 379.677 9.58238C377.475 8.87216 375.06 8.51704 372.433 8.51704C368.124 8.51704 364.206 9.62973 360.678 11.8551C357.151 14.0805 354.345 17.3594 352.262 21.6918C350.179 26.0241 349.137 31.339 349.137 37.6364C349.137 43.9337 350.191 49.2486 352.298 53.581C354.405 57.9134 357.257 61.1922 360.856 63.4176C364.454 65.643 368.503 66.7557 373.001 66.7557C377.167 66.7557 380.837 65.8679 384.009 64.0923C387.205 62.2931 389.691 59.7599 391.467 56.4929C393.266 53.2022 394.165 49.3314 394.165 44.8807L396.864 45.4489H374.989V37.6364H402.688V45.4489C402.688 51.4384 401.41 56.6468 398.853 61.0739C396.32 65.5009 392.816 68.9337 388.342 71.3722C383.891 73.7869 378.777 74.9943 373.001 74.9943C366.561 74.9943 360.903 73.4792 356.026 70.4489C351.173 67.4186 347.385 63.1098 344.663 57.5227C341.964 51.9356 340.614 45.3068 340.614 37.6364C340.614 31.8835 341.384 26.7107 342.923 22.1179C344.485 17.5014 346.687 13.5715 349.528 10.3281C352.369 7.08475 355.73 4.59896 359.613 2.87074C363.496 1.14252 367.769 0.278406 372.433 0.278406C376.268 0.278406 379.843 0.858425 383.157 2.01846C386.495 3.15483 389.466 4.77651 392.07 6.88352C394.698 8.96685 396.888 11.4645 398.64 14.3764C400.392 17.2647 401.599 20.4725 402.262 24H393.171Z"
                      fill="#FFF5EA"
                    />
                  </svg>
                  {/*  */}
                  <svg
                    className="soon"
                    width="283"
                    height="76"
                    viewBox="0 0 283 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.2259 19.6321C50.5099 15.0156 49.2552 11.3106 46.4616 8.51704C43.6918 5.69981 39.6908 4.29119 34.4588 4.29119C30.9077 4.29119 27.6525 4.94224 24.6932 6.24432C21.7339 7.5464 19.2718 9.33381 17.3068 11.6065C15.3655 13.8556 14.1463 16.4242 13.6491 19.3125C13.3414 21.1828 13.4242 22.8755 13.8977 24.3906C14.3949 25.8821 15.2116 27.2079 16.348 28.3679C17.4844 29.5279 18.893 30.5578 20.5739 31.4574C22.2547 32.3333 24.1368 33.1027 26.2202 33.7656L33.7841 36.1094C36.3646 36.938 38.7202 37.8968 40.8509 38.9858C43.0052 40.0748 44.8163 41.3769 46.2841 42.892C47.7519 44.3835 48.7936 46.1354 49.4091 48.1477C50.0483 50.16 50.143 52.4801 49.6932 55.108C49.054 59.0142 47.5152 62.4825 45.0767 65.5128C42.6383 68.5431 39.4777 70.9105 35.5952 72.6151C31.7126 74.3196 27.2382 75.1719 22.1719 75.1719C17.508 75.1719 13.5545 74.3788 10.3111 72.7926C7.09138 71.2064 4.71212 69.0047 3.1733 66.1875C1.63447 63.3466 1.04261 60.0795 1.39773 56.3864H5.94318C5.68277 59.393 6.21544 61.9972 7.54119 64.1989C8.86695 66.3769 10.8438 68.0578 13.4716 69.2415C16.1231 70.4252 19.2599 71.017 22.8821 71.017C26.812 71.017 30.3632 70.3423 33.5355 68.9929C36.7315 67.6435 39.3594 65.7732 41.419 63.3821C43.5024 60.991 44.8045 58.2211 45.3253 55.0724C45.7514 52.5156 45.5147 50.3139 44.6151 48.4673C43.7154 46.6207 42.1884 45.0346 40.0341 43.7088C37.9034 42.3594 35.1927 41.1757 31.902 40.1577L23.7344 37.6009C18.3366 35.8726 14.3949 33.5289 11.9091 30.5696C9.4233 27.5866 8.53551 23.8816 9.24574 19.4545C9.90862 15.643 11.4593 12.2931 13.8977 9.40483C16.3362 6.51657 19.402 4.25568 23.0952 2.62216C26.7884 0.988635 30.813 0.171875 35.169 0.171875C39.5014 0.171875 43.1828 1.01231 46.2131 2.69318C49.267 4.35038 51.5161 6.64678 52.9602 9.58238C54.428 12.518 54.9607 15.8679 54.5582 19.6321H50.2259ZM127.889 37.8139C126.658 45.295 124.291 51.8291 120.787 57.4162C117.283 62.9796 112.974 67.3002 107.861 70.3778C102.771 73.4555 97.2192 74.9943 91.206 74.9943C85.0507 74.9943 79.9015 73.4318 75.7585 70.3068C71.6392 67.1818 68.7391 62.8021 67.0582 57.1676C65.401 51.5331 65.1761 44.9635 66.3835 37.4588C67.6619 29.9777 70.053 23.4555 73.5568 17.892C77.0843 12.3049 81.4048 7.97254 86.5185 4.89488C91.6321 1.81723 97.2074 0.278406 103.244 0.278406C109.281 0.278406 114.371 1.84091 118.514 4.96591C122.657 8.06723 125.569 12.4351 127.25 18.0696C128.955 23.6804 129.168 30.2618 127.889 37.8139ZM123.592 37.4588C124.729 30.688 124.598 24.8404 123.202 19.9162C121.829 14.9919 119.414 11.2041 115.957 8.55256C112.525 5.87736 108.263 4.53977 103.173 4.53977C97.965 4.53977 93.1117 5.90104 88.6136 8.62358C84.1155 11.3461 80.2921 15.205 77.1435 20.2003C74.0185 25.1719 71.8759 31.0431 70.7159 37.8139C69.5795 44.5848 69.6979 50.4323 71.071 55.3565C72.4441 60.2571 74.8589 64.045 78.3153 66.7202C81.7718 69.3954 86.0687 70.733 91.206 70.733C96.4616 70.733 101.339 69.3717 105.837 66.6491C110.358 63.9029 114.182 60.044 117.307 55.0724C120.432 50.0772 122.527 44.206 123.592 37.4588ZM203.085 37.8139C201.853 45.295 199.486 51.8291 195.982 57.4162C192.478 62.9796 188.17 67.3002 183.056 70.3778C177.966 73.4555 172.415 74.9943 166.401 74.9943C160.246 74.9943 155.097 73.4318 150.954 70.3068C146.835 67.1818 143.934 62.8021 142.254 57.1676C140.596 51.5331 140.371 44.9635 141.579 37.4588C142.857 29.9777 145.248 23.4555 148.752 17.892C152.28 12.3049 156.6 7.97254 161.714 4.89488C166.827 1.81723 172.403 0.278406 178.44 0.278406C184.477 0.278406 189.567 1.84091 193.71 4.96591C197.853 8.06723 200.764 12.4351 202.445 18.0696C204.15 23.6804 204.363 30.2618 203.085 37.8139ZM198.788 37.4588C199.924 30.688 199.794 24.8404 198.397 19.9162C197.024 14.9919 194.609 11.2041 191.153 8.55256C187.72 5.87736 183.459 4.53977 178.369 4.53977C173.16 4.53977 168.307 5.90104 163.809 8.62358C159.311 11.3461 155.487 15.205 152.339 20.2003C149.214 25.1719 147.071 31.0431 145.911 37.8139C144.775 44.5848 144.893 50.4323 146.266 55.3565C147.639 60.2571 150.054 64.045 153.511 66.7202C156.967 69.3954 161.264 70.733 166.401 70.733C171.657 70.733 176.534 69.3717 181.032 66.6491C185.554 63.9029 189.377 60.044 192.502 55.0724C195.627 50.0772 197.722 44.206 198.788 37.4588ZM282.115 1.27273L270.041 74H265.709L230.091 9.33381H229.665L218.905 74H214.466L226.54 1.27273H230.908L266.561 66.0099H266.987L277.712 1.27273H282.115Z"
                      fill="#FF0101"
                    />
                  </svg>
                </section>
                <div className="underline my-3"></div>
                <p className="text-[#FFF5EA]">
                  If you'd like to have a personal webpage, you can reach me
                  here
                  <Link
                    to="/contact"
                    id="mycontacts"
                    className="relative xxs:top-[6px] xxs:left-1 "
                  >
                    my contacts.
                  </Link>
                </p>
                {/* <Link to="/" className="btn btn-link">
                  read more
                </Link> */}
              </section>
              {/* </a> */}
            </section>
          </div>
        </div>
      </div>

      <BackToTopButton />

      {/* My VISION, MISSION and VALUES */}
      {/* <VMC /> */}
    </div>
  );
}

export default Aboutme;
