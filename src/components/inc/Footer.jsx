import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="section footer bg-[#18181b] text-white py-4">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4">
              <h6>Company Information</h6>
              <hr />
              <p className="text-white">
                {" "}
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.{" "}
              </p>
            </div> */}
            <div className="col-md-6">
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

            <div className="col-md-6">
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

      <div className="container-fluid bg-[#212529]">
        <div className="row pb-3">
          <iframe
    
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19434.68447561604!2d120.82993000588208!3d14.862821500948954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1710677133536!5m2!1sen!2sph"
            width="100%"
            height="650"
            style={{ border: 0, borderRadius: '40px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Footer;
