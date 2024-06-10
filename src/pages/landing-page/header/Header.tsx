//lib
import React from "react";

//components
import SelectLanguage from "../../../components/selectLanguage";

//shared
import { ICONS } from "../../../assets";

//style
import "./styles.css";
import { STRING } from "../helpers/constants";

const Header: React.FC<{ scrollToFooter: () => void }> = ({
  scrollToFooter,
}) => {
  //hooks

  //useEffect

  //functions

  return (
    <div className="top">
      <div className="header">
        <nav className="navBar">
          <img
            src={ICONS.NetflixLogo}
            alt={STRING.LOGO}
            className="logo"
            onClick={scrollToFooter}
            title={STRING.TITLE}
          />
          <div className="buttons">
            <SelectLanguage />
            <button className="signinButton">
              <b>{STRING.SIGNIN} </b>
            </button>
          </div>
        </nav>
        <div className="header-content">
          <h1>{STRING.HEADING}</h1>
          <h3>{STRING.SUBHEADING}</h3>
          <p>{STRING.PARA}</p>
          <form className="signup">
            <input
              type="email"
              name="userEmail"
              id="inputID"
              placeholder={STRING.EMAIL}
            />
            <button type="submit" className="signin-button">
              <b>{STRING.GETSTARTED}</b>
              <img src={ICONS.Arrow} alt={STRING.GETSTARTED} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
