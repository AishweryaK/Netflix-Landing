//lib
import React from "react";

//components
import SelectLanguage from "../../../components/selectLanguage";

//style
import "./styles.css";
import { STRING } from "../helpers/constants";

const Footer: React.FC = () => {
  //hooks
  
  //useEffect

  //functions

  return (
    <div className="top">
      <div className="divider">
        <h2>
          {STRING.FOOTERHEADING} <u>{STRING.FOOTERNUMBER}</u>
        </h2>
        <div className="footer">
          <div className="col">
            <a href="/"> {STRING.COL1ROW1} </a>
            <a href="/"> {STRING.COL1ROW2} </a>
            <a href="/"> {STRING.COL1ROW3} </a>
            <a href="/"> {STRING.COL1ROW4} </a>
          </div>

          <div className="col">
            <a href="/"> {STRING.COL2ROW1} </a>
            <a href="/"> {STRING.COL2ROW2} </a>
            <a href="/"> {STRING.COL2ROW3} </a>
            <a href="/"> {STRING.COL2ROW4} </a>
          </div>

          <div className="col">
            <a href="/"> {STRING.COL3ROW1} </a>
            <a href="/"> {STRING.COL3ROW2} </a>
            <a href="/"> {STRING.COL3ROW3} </a>
            <a href="/"> {STRING.COL3ROW4} </a>
          </div>

          <div className="col">
            <a href="/"> {STRING.COL4ROW1} </a>
            <a href="/"> {STRING.COL4ROW2} </a>
            <a href="/"> {STRING.COL4ROW3} </a>
            <a href="/"> {STRING.COL4ROW4} </a>
          </div>
        </div>
        <SelectLanguage />
        <p>{STRING.NETFLIXINDIA}</p>
      </div>
    </div>
  );
};

export default Footer;
