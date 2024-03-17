import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
              {" "}
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.{" "}
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">
                Mag-Asawang Sapa, Santa Maria, Bulacan, Philippines
              </p>
            </div>
            <div>
              <p className="text-white mb-1">Jude Michael Daroya Maagad</p>
            </div>
            <div>
              <p className="text-white mb-1">09217105661</p>
            </div>
            <div>
              <p className="text-white mb-1">jude11318@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
