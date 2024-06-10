// import React from 'react'
// import BootStrap from './BootStrap'

import { useEffect, useState } from "react";
import { ICONS } from "../assets";

// export default function Accordion() {
//   return (
//     <div className='bootstrap'>
//         <BootStrap />
//     </div>
//   )
// }

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll: () => void = () => {
    const minHeight = window.innerHeight*0.5;
    const winScroll = window.scrollY;

    if (winScroll > minHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button onClick={handleScrollUp} className="scroll">
      <img src={ICONS.Scroll} alt="scroll" className="scrollIcon" />
    </button>
  ) : null;
};

export default GoTopButton;
