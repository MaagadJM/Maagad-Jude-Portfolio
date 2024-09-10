import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <main className="bg-[#18181b] pt-40">
        <section className="footer text-white py-4">
          <div className="mx-[15%]">
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
              <div className="col-md-6 font-light text-xl z-1">
                <p>Quick Links</p>
                <hr className="text-[#ca8b04]" />
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

              <div className="col-md-6 font-light text-xl max-md:pt-10">
                <p>Contact Information</p>
                <hr className="text-[#ca8b04]" />
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

        <div className="grid py-10 mx-[15%]">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19434.68447561604!2d120.82993000588208!3d14.862821500948954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1710677133536!5m2!1sen!2sph"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61707.475463848394!2d120.94566310141343!3d14.841120701582012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ac22ac27a55f%3A0x4a8611643c5c0dd0!2sSanta%20Maria%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1721816779438!5m2!1sen!2sph"
            width="100%"
            height="150"
            className="z-1 border-none rounded-lg"
            // style={{ border: 0, borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Footer;
