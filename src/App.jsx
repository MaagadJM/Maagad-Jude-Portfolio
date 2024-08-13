import React, { useState, useEffect } from "react";
import "./App.css";

import Loader from "./components/inc/Loader";

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

  return (
    // <HashRouter>
    <main className="overflow-x-hidden">
      {loading && <Loader imageSrc={ImageLoader} />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<Aboutme />}></Route>
            <Route path="/contact" element={<Contactme />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </main>
    // </HashRouter>
  );
}

export default App;
