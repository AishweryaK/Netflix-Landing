import React from "react";
import { ICONS } from "../assets";
import "./style.css";
import { STRING } from "../pages/landing-page/helpers/constants";

const SelectLanguage: React.FC = () => {
  const handle = () => {
    alert("Clicked");
  };
  return (
    <div className="lang">
        <img
                src={ICONS.Lang}
                alt="Language"
              />
      <select
        className="language-btn"
        defaultValue={"English"}
      >
        {/* 
              <b>English</b>
              <img src={ICONS.Dropdown} alt="Dropdown" /> */}
        <option value="english">{STRING.ENGLISH}</option>
        <option value="hindi">{STRING.HINDI} </option>
      </select>
    </div>
  );
};

export default SelectLanguage;
