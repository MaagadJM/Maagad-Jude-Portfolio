import React from "react";

function Contactme() {
  return (
    <>
      <section className="bg-[#18181b] text-[#FFF5EA] h-screen">
        <div className="container h-full grid content-center justify-center items-center gap-y-4">
          <a
            href="tel:09217105661"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-light text-[#FFF5EA] no-underline"
          >
            <p className="text-3xl font-light" id="contacts-hov">0921 710 5661</p>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jmm.maagad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-light text-[#FFF5EA] no-underline"
          >
            <p className="text-3xl font-light ml-1" id="contacts-hov">jmm.maagad@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/judemichael-maagad"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#FFF5EA]"
          >
            <p className="text-3xl font-light" id="contacts-hov">Linkedin</p>
          </a>
          <a
            href="https://www.jobstreet.com.ph/profile/judemichael-maagad-MRPPffVWk2"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#FFF5EA]"
          >
            <p className="text-3xl font-light" id="contacts-hov">Jobstreet</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contactme;
