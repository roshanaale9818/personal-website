import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import 'font-awesome/css/font-awesome.min.css';
import useInput from "../../hooks/use-input";
import { isEmail, isNotEmpty } from "../../shared/form-logics/form-logic";
import axios from "axios";
import { apiUrl } from "../../environment/environment";
import { ToastContainer, toast } from "react-toastify";
const Signup = (props) => {
const navigate = useNavigate();
    const {
        value: userNameValue,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsername,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);
    const {
        value: keyValue,
        isValid: keyIsValid,
        hasError: keyHasError,
        valueChangeHandler: keyChangeHandler,
        inputBlurHandler: keyBlurHandler,
        reset: resetKey,
    } = useInput(isNotEmpty);
    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty);

    const showAlert = (type, message) => toast[
        type
    ](message);
    const onGotoLoginHandler  = ()=>{
        navigate('/admin/login');
    }
    const onSignUpHandler = async (event) => {
        event.preventDefault();

        if (!usernameIsValid || !keyIsValid || !passwordIsValid || !emailIsValid) {
        // console.log("NOT GONE")
            return;
        }
        console.log("GONE")
        let body = {
            username: userNameValue,
            password: passwordValue,
            email: emailValue,
            isAdmin: keyValue
        }


        await axios.post(`${apiUrl}auth/signup`, body).then((res) => {
            if (res.data.status === "ok") {
                // console.log("Success login");
                showAlert("success", res.data.message);

            }
            else{
                showAlert("error", res.data.message);
            }
         }).catch((err) => {
            console.error(err);
            showAlert("error", err);
        })

    }



    return <React.Fragment>
        <section className="login-container">
            <div className="wrapper">
                <header>Sign Up for Admin</header>
                <form onSubmit={onSignUpHandler}>
                    <div className="field email">
                        <div className="input-area">
                            <input type="text" className={`${emailHasError && 'invalid'}`} value={emailValue}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler} placeholder="Email" />
                            <i className="icon fa fa-envelope"></i>
                            <i className="error error-icon fa fa-exclamation-circle"></i>
                        </div>

                    </div>
                    <div className="field email">
                        <div className="input-area">
                            <input type="text" className={`${usernameHasError && 'invalid'}`} value={userNameValue}
                                onChange={usernameChangeHandler}
                                onBlur={usernameBlurHandler} placeholder="Username" />
                            <i className="icon fa fa-envelope"></i>
                            <i className="error error-icon fa fa-exclamation-circle"></i>
                        </div>

                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input type="password" className={`${passwordHasError && 'invalid'}`} value={passwordValue}
                                onChange={passwordChangeHandler}
                                onBlur={passwordBlurHandler} placeholder="Password" />
                            <i className="icon fa fa-lock"></i>
                            <i className="error error-icon fa fa-exclamation-circle"></i>
                        </div>

                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input type="password" className={`${keyHasError && 'invalid'}`} value={keyValue}
                                onChange={keyChangeHandler}
                                onBlur={keyBlurHandler} placeholder="Secret Key" />
                            <i className="icon fa fa-lock"></i>
                            <i className="error error-icon fa fa-exclamation-circle"></i>
                        </div>

                    </div>

                    <div className="error">Secret Key for admin is required.</div>
                    <button className="loginbtn" type="submit">
                        Signup
                    </button>
                    <button className="loginbtn" onClick={onGotoLoginHandler} type="button">
                        Back to Login
                    </button>
                </form>

            </div>
        </section>
        <ToastContainer />

    </React.Fragment>
}
export { Signup };