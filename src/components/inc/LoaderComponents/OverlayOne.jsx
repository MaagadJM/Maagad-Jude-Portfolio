import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const OverlayOne = () => {
  const overlayoneRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayoneRef.current, { opacity: 0, duration: 0.5 });
  }, [overlayoneRef]);

  return (
    <div ref={overlayoneRef} className="overlay-one">
      {/* Your overlay content here */}
    </div>
  );
};

export default OverlayOne;