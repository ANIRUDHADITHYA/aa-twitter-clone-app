import "./Signup.css";
import ValidateRegister from "../../Utils/ValidateRegister";
import useRegisterForm from "../../Hooks/useRegisterForm";


const Signup = (props) => {

    const { handleChange, handleSubmit, errors, values, loader } = useRegisterForm(ValidateRegister)

    return (
        <div className="signin-section-popup">
            <div className="signin-container">
                <div className="signin-header">
                    <i class="fa-solid fa-xmark" onClick={() => { props.close(0) }}></i>
                    <h1>AA's Twitter</h1>
                    <i></i>
                </div>
                <div className="sigin-popup-container signup">
                    <h2>Sign up to AA's Twitter </h2>
                    {errors ? (
                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                            {errors.first_name ? errors.first_name:
                                errors.last_name ? errors.last_name:
                                errors.email ? errors.email:
                                errors.username ? errors.username:
                                errors.password ? errors.password :
                                errors.confirm_password ? errors.confirm_password: ""
                                }
                        </p>
                    ) : ""}

                    <div className="input-name-container">
                        <div class="input-container right">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                required />
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-container left">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                onChange={handleChange}
                                value={values.last_name}
                                required />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="input-container">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            required />
                        <label for="email">Email address</label>
                    </div>
                    <div class="input-container">

                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={handleChange}
                            value={values.username}
                            required />
                        <label for="username">Username</label>
                    </div>
                    <div class="input-container">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            required />
                        <label for="password">Password</label>
                    </div>
                    <div class="input-container">
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            onChange={handleChange}
                            value={values.confirm_password}
                            required />
                        <label for="confirm_password">Confirm Password</label>
                    </div>
                    <button className="sign-in-btn" onClick={handleSubmit}>Create Account</button>
                    <p className="already-have-acc ">Already have an account? <span onClick={() => { props.close(1) }}>Sign in</span></p>
                </div>
            </div>
        </div>
    )
}


export default Signup;