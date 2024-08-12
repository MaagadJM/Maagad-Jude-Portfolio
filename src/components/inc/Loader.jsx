import React, { useState, useEffect } from "react";

const Loader = ({ imageSrc, size = 100 }) => {
    return (
        <div className="spinner-loader">
          <div className="spinner"></div>
          <img src={imageSrc} alt="Loading..." className="loader-image" />
        </div>
      );
    
};

export default Loader;
