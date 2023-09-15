import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Player } from '@lottiefiles/react-lottie-player';
import Signin from "../../Components/Signin/Signin";
import { useState } from "react";
import Signup from "../../Components/Signup/Signup";

const LandingPage = () => {

    const [accountPopup, setAccountPopup] = useState(0);

    return (
        <>
            {accountPopup === 1 ? <Signin close={setAccountPopup}/> : accountPopup === 2 ? <Signup close={setAccountPopup}/> : ""}
            <div className="landing-section">
                <div className="landing-container">
                    <div className="logo-container">
                        <Player
                            autoplay
                            loop
                            src="/Asserts/logoani.json" >
                        </Player>
                    </div>
                    <div className="landing-account-section">
                        <div className="landing-account-container">
                            <h1>Anirudh Adithya's Twitter</h1>
                            <h2>Join Today</h2>
                            <div className="landing-signup-container">
                                <button className="create-acc-btn" onClick={()=>{setAccountPopup(2)}}>Create account</button>
                                <p>By signing up, you agree to the <Link to="/tearms">Terms of Services</Link> and <Link to="/privacy">Privacy Policy</Link>, including <Link to="cookie">Cookie Use</Link>.</p>
                                <h4>Already have an account?</h4>
                                <button className="signin-acc-btn" onClick={()=>{setAccountPopup(1)}}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-footer-container">
                    <ul className="footer-items">
                        <li>About</li>
                        <li>Help Centre</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Accessibility</li>
                        <li>Blog</li>
                        <li>Status</li>
                        <li>Careers</li>
                        <li>Brand resources</li>
                        <li>Advertising</li>
                        <li>Marketing</li>
                        <li>Business</li>
                        <li>Developers</li>
                        <li>Directory</li>
                        <li>Settings</li>
                    </ul>
                    <Link to="/">© 2023 AA's Twitter Clone.</Link>
                </div>
            </div>
        </>
    )
}




export default LandingPage;