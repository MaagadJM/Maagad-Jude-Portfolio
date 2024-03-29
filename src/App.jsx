import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Aboutme from "./components/pages/About";
import Contactme from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";

function App() {
  return (
    // <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutme />}></Route>
          <Route path="/contact" element={<Contactme />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </div>
    // </HashRouter>
  );
}

export default App;
