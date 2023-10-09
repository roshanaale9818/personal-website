/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import AuthContext from "../services/providers/auth.context";
import { useNavigate } from "react-router-dom";
const AuthComponent = () => {
    const authCtx=useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = ()=>{
        if(window.confirm("Are you sure you want to logout?")){
            authCtx.logOut();
            navigate('/home')
        }
    }
    const login = (user)=>{
            authCtx.logIn(user);
    }
    const getCurrentUser = ()=>{
        return authCtx.currentUser;
    }
}
export  {AuthComponent};