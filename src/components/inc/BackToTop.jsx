import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show button after scrolling down 300px
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // isVisible && (
    <button
      onClick={scrollToTop}
      // className="fixed bottom-10 right-10 p-3 rounded-full"
      className={`fixed bottom-10 right-10 p-3 rounded-full ${
        isVisible ? "visible" : ""
      }`}
      id="back-to-top-btn"
      style={{ zIndex: 1000 }}
    >
      {/* ⬆️ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 512 512"
        id="back-to-top"
      >
        <path
          fill="currentColor"
          d="M45.95 14.553c-19.38.81-30.594 11.357-30.282 30.283l19.768 30.78c4.43-1.213 9.36-3.838 14.248-7.335l42.474 59.935c-17.018 20.83-31.258 44.44-42.71 70.836l26.55 26.552c11.275-23.6 24.634-44.826 39.918-63.864l210.82 297.475l166.807 33.213L460.33 325.62L162.78 114.745c19.907-16.108 41.842-29.91 65.652-41.578l-26.553-26.55c-27.206 11.803-51.442 26.576-72.735 44.292L69.39 48.56c3.443-4.823 6.062-9.735 7.342-14.242l-30.78-19.765zm400.84 86.933v.008l.003-.008zm0 .008l-28.028 124.97l-25.116-80.593l-18.105 70.667l-26.862-49.64l-.584 57.818l128.484 91.69l15.184 87.017l-1.168-186.885l-34.457 39.713l-9.346-154.756zm-300.95 27.98l222.224 196.368l25.645 66.75l-66.75-25.645L130.6 144.734a309 309 0 0 1 15.238-15.26zm32.305 196.274v.004h.005zm.005.004l28.028 22.775l-36.21 4.088l57.82 19.272l-105.706 4.09l115.05 27.45L136.1 422.114l127.316 25.696l-67.164 43.803l208.494 1.752l-87.017-15.185l-104.54-150.676l-35.037-1.752z"
        />
      </svg>
    </button>
    // )
  );
}

export default BackToTopButton;
