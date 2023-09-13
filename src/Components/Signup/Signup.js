import "./Signup.css";


const Signup = (props) => {
    return (
        <div className="signin-section-popup">
            <div className="signin-container">
                <div className="signin-header">
                    <i class="fa-solid fa-xmark" onClick={() => { props.close(0) }}></i>
                    <h1>AA's Twitter</h1>
                    <i></i>
                </div>
                <div className="sigin-popup-container">
                    <h2>Sign up to AA's Twitter </h2>
                    <div className="input-name-container">
                        <div class="input-container right">
                            <input type="text" id="emailUsername" required />
                            <label for="emailUsername">First Name</label>
                        </div>
                        <div class="input-container left">
                            <input type="text" id="emailUsername" required />
                            <label for="emailUsername">Last Name</label>
                        </div>
                    </div>
                    <div class="input-container">
                        <input type="text" id="emailUsername" required />
                        <label for="emailUsername">Email address, username</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" required />
                        <label for="password">Confirm Password</label>
                    </div>
                    <button className="sign-in-btn">Create Account</button>
                    <p className="already-have-acc ">Already have an account? <span onClick={() => { props.close(1) }}>Sign in</span></p>
                </div>
            </div>
        </div>
    )
}


export default Signup;