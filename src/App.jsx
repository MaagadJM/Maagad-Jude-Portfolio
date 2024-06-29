import React from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Aboutme from "./components/pages/AboutMe/About";
import Contactme from "./components/pages/MyContacts/Contact";
import Projects from "./components/pages/MyProjects/Projects";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";

function App() {
  return (
    // <HashRouter>
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutme />}></Route>
        <Route path="/contact" element={<Contactme />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </main>
    // </HashRouter>
  );
}

export default App;
