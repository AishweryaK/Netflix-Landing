import React from "react";
import { ICONS } from "../../assets";
import './styles.css';

const MyCompo : React.FC = () =>  {

    const handle = () => {
        alert("Clicked")
    }
    return (
            <div className ="header">
                <nav>
                    <img src={ICONS.NetflixLogo} alt="Netflix Logo" className="logo"/>
                    <div>
                        <button className="language-btn" onClick={handle}>
                        <img style={{width:"15px", marginRight:"10px"}} src={ICONS.Lang} alt="Language" />
                            <b>English</b>
                        <img src={ICONS.Dropdown} alt="Dropdown" />
                        </button>
                        <button><b>Sign In </b></button>
                    </div>
                </nav>
                <div className="header-content">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className="signup">
                        <input type="email" name="userEmail"
                        placeholder="Email address"
                        />
                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </div>
    )
};

export default MyCompo;