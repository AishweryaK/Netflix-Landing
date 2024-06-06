import React from "react";
import { ICONS } from "../../assets";
import "./styles.css";
import SelectLanguage from "./helpers/selectLanguage";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <nav className="navBar">
          <img src={ICONS.NetflixLogo} alt="Netflix Logo" className="logo" />
          <div className="buttons">
            <SelectLanguage />
            <button>
              <b>Sign In </b>
            </button>
          </div>
        </nav>
        <div className="header-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="signup">
            <input
              type="email"
              name="userEmail"
              id="inputID"
              placeholder="Email address"
            />
            <button type="submit" className="signin-button">
              <b>Get Started</b>
              <img src={ICONS.Arrow} alt="Get Started" />
            </button>
          </form>
        </div>
      </div>
      <div className="divider">
      <h2>Questions? Call <u>000-800-919-1694</u></h2>
      <div className="footer">

          <div className="col">
            <a href=""> FAQ </a>
            <a href=""> Investor Relations </a>
            <a href=""> Privacy </a>
            <a href=""> Speed Test </a>
          </div>

          <div className="col">
            <a href=""> Help Centre </a>
            <a href=""> Jobs </a>
            <a href=""> Cookie Preferences </a>
            <a href=""> Legal Notices </a>
          </div>

          <div className="col">
            <a href=""> Account </a>
            <a href=""> Ways to Watch </a>
            <a href=""> Corporate Information </a>
            <a href=""> Only on Netflix </a>
          </div>

          <div className="col">
            <a href=""> Media Centre </a>
            <a href=""> Investor Relations </a>
            <a href=""> Terms of Use </a>
            <a href=""> Contact Us </a>
          </div>
        </div>
        <SelectLanguage />
        <p>Netflix India</p>
        </div>

    </>
  );
};

export default Header;
