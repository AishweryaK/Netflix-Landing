//lib
import React, { useRef } from "react";

//components
import Footer from "./footer/Footer";
import Header from "./header/Header";

//shared
import { ICONS } from "../../assets";

//style
import "./styles.css";

const LandingPage: React.FC = () => {
  //hooks
  const footerRef = useRef<HTMLDivElement>(null);

  //useEffect

  //functions
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="top">
      <Header scrollToFooter={scrollToFooter} />
      <div style={{ height: "155rem" }} />
      <div ref={footerRef} />
      <Footer />
    </div>
  );
};

export default LandingPage;
