import "./Signin.css";


const Signin = (props) => {
    return (
        <div className="signin-section-popup">
            <div className="signin-container">
                <div className="signin-header">
                    <i class="fa-solid fa-xmark" onClick={()=>{props.close(0)}}></i>
                    <h1>AA's Twitter</h1>
                    <i></i>
                </div>
                <div className="sigin-popup-container signup">
                    <h2>Sign in to AA's Twitter </h2>
                    <div class="input-container">
                        <input type="text" id="emailUsername" required />
                        <label for="emailUsername">Email address, username</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
                    <button className="forgot-psw-btn">forgot password ?</button>
                    <button className="sign-in-btn">Sign in</button>
                    <p className="dont-have-acc">Don't have an account? <span onClick={() => { props.close(2) }}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}


export default Signin;