import React, { useState, useEffect } from "react";


import ShopNBidTN from "/Thumbnails/Shop N' Bid - Jude Michael Maagad November 20, 2025 ticket chart.png";
import ExtrimV3TN from "/Thumbnails/XV3 - Jude Michael Maagad November 20, 2025 ticket chart.png";

// import ShopNBidPdf from "/PDF/Shop N' Bid E-commerce System - Jude Michael Maagad.pdf";
// import ExtrimV3Pdf from "/PDF/Extrim V3 - EXTended Retail Inventory Management - Jude Michael Maagad.pdf";


import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
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
            ();
        // AOS.refresh();
    }, []);


    return (
        <>
            {/* ========================= HMR PH WORK EXPERIENCE SECTION ========================== */}

            <section id="second-sect" className="section">
                <div className="py-5">
                    <div
                        className="mx-[15%] mb-5"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        <p className="text-[#FFF5EA] text-3xl font-light">
                            HMR Philippines Inc. Full Stack Developer
                        </p>
                        <div className="underline"></div>
                        <p className="text-[#FFF5EA] pt-4">
                            Resolved critical bugs in legacy modules, reducing user support tickets by 35% and improving system reliability.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mx-[15%]">
                        <div
                            className=" custom-border px-1"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="1000"
                        >

                            <section
                                data-aos="fade-right"
                                data-aos-delay="700"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                style={{ padding: "15px" }}

                            >
                                <a
                                    href={ShopNBidTN}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                    className="a-image-shadow rounded-[1%]"
                                    style={{ position: "relative", display: "inline-block", padding: "15px" }}
                                >
                                    <img
                                        src={ShopNBidTN}
                                        alt="Certificate Thumbnail"
                                        className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                                        style={{
                                            // transform: `translateY(${offsetY * 0.1}px)`,
                                            pointerEvents: "none",
                                            display: "block",
                                        }}
                                        draggable="false"
                                    />

                                </a>

                                <section className="mx-0 mt-[20px]">
                                    <p className="text-[#FFF5EA] text-3xl font-light">
                                        Shop N' Bid <br /> E-commerce system
                                    </p>
                                    <div className="underline"></div>
                                    <p className="text-[#FFF5EA] mt-2">
                                        Revised the mobile version of the Shop N' Bid E-commerce system to enhance user experience and accessibility.
                                    </p>

                                </section>

                            </section>

                        </div>
                        {/* ----------------------------------------- */}
                        <div
                            className=" custom-border px-1"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="1000"
                        >
         
                            <section
                                data-aos="fade-left"
                                data-aos-delay="700"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                style={{ padding: "15px" }}

                            >
                                <a
                                    href={ExtrimV3TN}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                    className="a-image-shadow rounded-[1%]"
                                    style={{ position: "relative", display: "inline-block", padding: "15px" }}
                                >
                                    <img
                                        src={ExtrimV3TN}
                                        alt="Certificate Thumbnail"
                                        className="rounded-[1%] xxs:h-48 md:h-80 lg:h-[80%]  spin-hover"
                                        style={{
                                            // transform: `translateY(${offsetY * 0.1}px)`,
                                            pointerEvents: "none",
                                            display: "block",
                                        }}
                                        draggable="false"
                                    />

                                </a>

                                <section className="mx-0 mt-[20px]">
                                    <p className="text-[#FFF5EA] text-3xl font-light">
                                        Extrim V3 <br /> EXTended Retail Inventory Management
                                    </p>
                                    <div className="underline"></div>
                                    <p className="text-[#FFF5EA] mt-2">
                                        Troubleshooting and debugging issues in the Extrim V3 system, ensuring smooth operation and user satisfaction.
                                        Supporting payment issues with Paymongo
                                    </p>

                                </section>

                            </section>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Projects;
