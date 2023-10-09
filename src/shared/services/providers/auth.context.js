import React from 'react';
// console.log(JSON.parse(localStorage.getItem('user')) )
const AuthContext = React.createContext({
    isLoggedIn:false,
    logIn:(user)=>{},
    logOut:()=>{},
    currentUser:JSON.parse(sessionStorage.getItem('user'))?JSON.parse(sessionStorage.getItem('user')):null
});
export default AuthContext;
