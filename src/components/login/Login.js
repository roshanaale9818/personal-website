import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import 'font-awesome/css/font-awesome.min.css';
import { isNotEmpty } from "../../shared/form-logics/form-logic";
import useInput from "../../hooks/use-input";
// import { RequiredMessage } from "../../shared/required-message/RequiredMessage";
import axios from "axios";
import { apiUrl } from "../../environment/environment";
const Login = (props)=>{
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
      const onLoginHandler = (event)=>{
            event.preventDefault();
            if( usernameIsValid || passwordIsValid ){
                return;
            }

            axios.get(`${apiUrl}/auth/signin`).then((res) => {
                console.log("resa", res);
                if (res.status === 200) {
                    // setCategoriesList(res.data.data);
                    // console.log("resa", categoriesList);
                }
            })

      }
 return <React.Fragment>
        <section className="login-container">
        <div class="wrapper">
        <header>Login</header>
        <form onSubmit={onLoginHandler}>
            <div class="field email">
                <div class="input-area">
                    <input type="text" className={`${usernameHasError && 'invalid'}`} value={userNameValue}
                                    onChange={usernameChangeHandler}
                                    onBlur={usernameBlurHandler} placeholder="Username" />
                    <i class="icon fa fa-envelope"></i>
                    <i class="error error-icon fa fa-exclamation-circle"></i>
                </div>
                {/* <div class="error error-txt">Email can't be blank</div> */}
                {/* {!usernameIsValid  && 
                // <div class="error error-txt d-block">Username is required.</div>
                 <RequiredMessage labelName="Username"></RequiredMessage>
                } */}
                
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password"  className={`${passwordHasError && 'invalid'}`} value={passwordValue}
                                    onChange={passwordChangeHandler}
                                    onBlur={passwordBlurHandler} placeholder="Password"/>
                    <i class="icon fa fa-lock"></i>
                    <i class="error error-icon fa fa-exclamation-circle"></i>
                </div>
       
            </div>

            <button className="loginbtn"type="submit">
                Login
                </button>
        </form>
      
    </div>
        </section>
 </React.Fragment>
}
export  {Login};