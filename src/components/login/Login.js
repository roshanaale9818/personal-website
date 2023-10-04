import React from "react";
import "./Login.css";
import 'font-awesome/css/font-awesome.min.css';
import { isNotEmpty } from "../../shared/form-logics/form-logic";
import useInput from "../../hooks/use-input";
import axios from "axios";
import { apiUrl } from "../../environment/environment";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
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
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty);

    
    const resetForm = () => {
        resetPassword();
        resetUsername();
    }
    const showAlert = (type, message) => toast[
        type
    ](message);
    const onLoginHandler = async (event) => {
        event.preventDefault();
        if (!usernameIsValid || !passwordIsValid) {
            return;
        }
        let body = {
            username: userNameValue,
            password: passwordValue
        }
        await axios.post(`${apiUrl}auth/signin`, body).then((res) => {
            console.log("resa", res);
            if (res.data.status === "ok") {
                console.log("Success login");
                showAlert("success", 'Login successfull');
                localStorage.setItem('token',res.data.data.accessToken);
                navigate('/admin/home');
            }
            else{
                showAlert("error", res.data.message);
            }
        })

    }
    return <React.Fragment>
        <section className="login-container">
            <div className="wrapper">
                <header>Login</header>
                <form onSubmit={onLoginHandler}>
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

                    <button className="loginbtn" type="submit">
                        Login
                    </button>
                </form>

            </div>
        </section>
        <ToastContainer />
    </React.Fragment>
}
export { Login };