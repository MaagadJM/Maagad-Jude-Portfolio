import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import gsap from "gsap";

import JobExperiences from "../JobsExperiences/Jobs";
import Projects from "../MyProjects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
// import Service1 from "/Thumbnails/HSI thumbnail.png";
import MeCropped from "../../images/MeCropped.jpg";

import { feicons } from "../Carousel/feicons";

// import RHouseMount from "/right house mountain.png";
// import BlackedManMount from "/blacked man_on_mountain.png";

import BackToTop from "../../inc/BackToTop";
import ParticleBackground from "./ParticleBackground";

import ResumeBtn from "./resumebtns/ResumeBtn";
// import SplitBtn from "./resumebtns/SplitBtn";

// Module-level so the revealed hero buttons survive navigating away and back
// to Home; it only resets on a full page reload.
let heroButtonsRevealed = false;

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
      ({ offset: 50, once: false, mirror: true });
    // AOS.refresh();
  }, []);

  // const mainRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     mainRef.current,
  //     { opacity: 0 },
  //     { opacity: 1, duration: 3, ease: "power2.inOut" }
  //   );
  // }, [mainRef]);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  // Full parallax on desktop (lg+). On the stacked mobile layout, use a
  // gentler, capped shift so the hero text never drifts over the sections below.
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Never let the parallax push the hero text past the top of the next
  // section. offsetTop/offsetHeight ignore transforms, so this measures the
  // text's untranslated position.
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const [maxParallax, setMaxParallax] = useState(Infinity);

  useEffect(() => {
    const measure = () => {
      const hero = heroRef.current;
      const text = heroTextRef.current;
      const next = hero?.nextElementSibling;
      if (!hero || !text || !next) return;

      const textBottom =
        text.offsetParent.offsetTop + text.offsetTop + text.offsetHeight;
      const nextTop =
        next.getBoundingClientRect().top - hero.getBoundingClientRect().top;
      setMaxParallax(Math.max(0, nextTop - textBottom - 16));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(heroRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const parallaxY = Math.min(
    isDesktop ? offsetY * 0.3 : Math.min(offsetY * 0.1, 40),
    maxParallax
  );

  // Reveal the hero buttons once the user has scrolled 3000px. After that
  // they stay visible until the page is reloaded.
  const [showHeroButtons, setShowHeroButtons] = useState(
    () => heroButtonsRevealed
  );

  useEffect(() => {
    if (!showHeroButtons && offsetY > 3000) {
      heroButtonsRevealed = true;
      setShowHeroButtons(true);
    }
  }, [offsetY, showHeroButtons]);

  const handleReadMoreClick = () => {
    setActiveLink(1);

    const aboutLink = document.querySelector(".nav-link[href='/about']");
    if (aboutLink) {
      aboutLink.classList.add("active");
    }
  };

  return (
    <>
      <ParticleBackground />
      <div
        // ref={mainRef}
        ref={heroRef}
        id="first-sect"
        className="min-h-screen pb-16 lg:pb-0 lg:min-h-[92vh] xl:min-h-[95vh] w-screen lg:content-center relative z-[1]"
        // style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      >
        <section className="container grid lg:grid-cols-2 relative lg:mx-20 pt-16 gap-x-12 gap-y-10 lg:gap-y-0">
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
              className=" rounded-[2%] xxs:h-48 md:h-80 lg:h-96 f-image-shadow spin-hover"
              style={{ transform: `translateY(-${parallaxY}px)` }}
            />
          </section>

          <section
            ref={heroTextRef}
            className="xxs:text-center lg:text-start place-content-center px-6 lg:px-0"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-easing="ease-out"
              className="text-[#FFF5EA] text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Jude Michael Maagad
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="800"
              data-aos-easing="ease-out"
              className="text-[#ca8b04] text-base md:text-2xl mt-3"
            >
              <span className="block md:inline lg:block whitespace-nowrap">
                Full-Stack Web & Mobile App Developer
              </span>
              <span className="hidden md:inline lg:hidden"> · </span>
              <span className="block md:inline lg:block whitespace-nowrap">
                Software Engineer
              </span>
            </p>
            <div className="underline mt-5 mx-[auto] lg:mx-0 !w-24"></div>
            <p
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-easing="ease-out"
              className="text-[#FFF5EA]/80 text-base md:text-lg leading-relaxed mt-5 max-w-xl mx-[auto] lg:mx-0"
            >
              I build web and mobile products end to end, from Laravel and
              Node APIs to React and Vue frontends, and ship them to
              production.
            </p>
            <div
              className={`flex flex-wrap gap-4 mt-8 justify-center lg:justify-start transition-all duration-500 ease-out ${
                showHeroButtons
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 invisible"
              }`}
            >
              <ResumeBtn />
              <Link
                to="/contact"
                className="px-6 py-[10px] leading-6 whitespace-nowrap rounded-[4px] [border:1px_solid_#ca8b04] text-[#FFF5EA] no-underline hover:bg-[#ca8b04] hover:text-[#18181b] transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
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

      <section
        id="extras-sect"
        className=" flex space-x-16 overflow-hidden group mt-24 lg:mt-0"
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

      <JobExperiences />

      <Projects />

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

      {/* <VMC /> */}

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
