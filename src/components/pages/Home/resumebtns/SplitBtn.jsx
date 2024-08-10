import React from "react";

// const SplitBtn = ({ primaryText, secondaryText, primaryAction, secondaryAction }) => {
//     return (
//       <div className="split-button">
//         <button className="primary-btn" onClick={primaryAction}>
//           {primaryText}
//         </button>
//         <button className="secondary-btn" onClick={secondaryAction}>
//           {secondaryText}
//         </button>
//       </div>
//     );
//   };

const SplitBtn = ({ pdfUrl }) => {
  return (
    <div className="split-button">
      {/* <button
        className="primary-btn"
        onClick={() => window.open(pdfUrl, "_blank")}
      >
        View
      </button> */}
      <button
        className="resume-download"
        onClick={() => window.open(pdfUrl, "_blank", "noopener,noreferrer")}
      >
        Come back here to see my Resume!
      </button>
    </div>
  );
};

export default SplitBtn;
