import { useState } from "react";
import axios from "axios";
import "./Signin.css";
import useLoginForm from "../../Hooks/useLoginForm";
import ValidateLogin from "../../Utils/ValidateLogin";


const Signin = (props) => {
    const { handleChange, handleSubmit, values, errors, loader } = useLoginForm(ValidateLogin);
    return (
        <div className="signin-section-popup">
            <div className="signin-container">
                <div className="signin-header">
                    <i class="fa-solid fa-xmark" onClick={() => { props.close(0) }}></i>
                    <h1>AA's Twitter</h1>
                    <i></i>
                </div>
                <div className="sigin-popup-container">
                    <h2>Sign in to AA's Twitter </h2>
                    {errors ? (
                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                            {
                                errors.email ? errors.email :
                                    errors.password ? errors.password :
                                        ""}
                        </p>
                    ) : ""}
                    <div class="input-container">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            required />
                        <label for="email">Email address</label>
                    </div>
                    <div class="input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            required />
                        <label for="password">Password</label>
                    </div>
                    <button className="forgot-psw-btn">forgot password ?</button>
                    <button className="sign-in-btn" onClick={handleSubmit}>Sign in</button>
                    <p className="dont-have-acc">Don't have an account? <span onClick={() => { props.close(2) }}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}


export default Signin;