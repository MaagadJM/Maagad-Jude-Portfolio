import React, { useRef, useState, useEffect } from "react";
// import gsap from "gsap";

import OverlayOne from "./components/inc/LoaderComponents/OverlayOne";
import Loader from "./components/inc/LoaderComponents/Loader";
// import LoaderTwo from "./components/inc/LoaderComponents/LoaderTwo";
// import ThreeDScene from "./components/ThreeDScene";

import "./App.css";

import Home from "./components/pages/Home/Home";
import Aboutme from "./components/pages/AboutMe/About";
import Contactme from "./components/pages/MyContacts/Contact";
import Projects from "./components/pages/MyProjects/Projects";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";

import ImageLoader from "/JMM Logo Custom Icon.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Change this time to however long your loading takes
  }, []);

  // ======================================= //

  return (
    // <HashRouter>
    <main>
      <section
        // ref={mainRef}
        className="overflow-x-hidden"
      >
        {loading && <Loader imageSrc={ImageLoader} />}
        {!loading && (
          <section
          // id="gsap-overlay" className="bg-[#CA0503] w-screen h-screen"
          >
            <OverlayOne />
            <Navbar />
            <Routes>


            {/* <Route 
              exact 
              path="/" 
              element={
                <>
                  <div className="App">
                    <h1>My First 3D Scene</h1>
                    <ThreeDScene />
                  </div>
                  </>
              }>

            </Route> */}



              <Route exact path="/" element={<Home />}></Route>
              <Route path="/about" element={<Aboutme />}></Route>
              <Route path="/contact" element={<Contactme />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
            </Routes>
            <Footer />
          </section>
        )}
      </section>
    </main>
    // </HashRouter>
  );
}

export default App;
