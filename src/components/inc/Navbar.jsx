import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  const location = useLocation();

  useEffect(() => {
    // Extract the path from the location
    const currentPath = location.pathname;

    // Set the active link based on the current path
    if (currentPath === "/") {
      setActiveLink(0);
    } else if (currentPath === "/about") {
      setActiveLink(1);
    } else if (currentPath === "/contact") {
      setActiveLink(2);
    } else if (currentPath === "/projects") {
      setActiveLink(3);
    } else {
      setActiveLink(null);
    }
  }, [location]);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link
          to="/"
          className={`navbar-brand ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleLinkClick(0)}
        >
          My Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${activeLink === 0 ? "active" : ""}`}
                onClick={() => handleLinkClick(0)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${activeLink === 1 ? "active" : ""}`}
                onClick={() => handleLinkClick(1)}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${activeLink === 2 ? "active" : ""}`}
                onClick={() => handleLinkClick(2)}
              >
                My Contact
              </Link>
            </li>
            {/* ----------------------------------- */}
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${activeLink === 3 ? "active" : ""}`}
                onClick={() => handleLinkClick(3)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
