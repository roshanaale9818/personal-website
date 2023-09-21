import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import 'font-awesome/css/font-awesome.min.css';
const Login = (props)=>{
 return <React.Fragment>
        <section className="login-container">
        <div class="wrapper">
        <header>Login</header>
        <form>
            <div class="field email">
                <div class="input-area">
                    <input type="text" placeholder="Username"/>
                    <i class="icon fa fa-envelope"></i>
                    <i class="error error-icon fa fa-exclamation-circle"></i>
                </div>
                {/* <div class="error error-txt">Email can't be blank</div> */}
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password" placeholder="Password"/>
                    <i class="icon fa fa-lock"></i>
                    <i class="error error-icon fa fa-exclamation-circle"></i>
                </div>
                {/* <div class="error error-txt">Password can't be blank</div> */}
            </div>
            {/* <div class="pass-txt"><Link href="#">Forgot password?</Link></div> */}
            <button className="loginbtn" type="button">
                Login
                </button>
        </form>
        {/* <div class="sign-txt">Sign up ? <Link href="#">Signup now</Link></div> */}
    </div>
        </section>
 </React.Fragment>
}
export  {Login};