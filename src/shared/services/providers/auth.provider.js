
import { useReducer } from 'react';
// import LoggedInContext from './loggedin-context';
import AuthContext from './auth.context';

const defaultAuthState ={
    isLoggedIn:false,
    currentUser:null,
    user:null
}
const authReducer = (state,action)=>{
    // console.log("STATE and ACTion",state,action)
    if(action.type==='LOGIN'){
        return {
            isLoggedIn:true,
            currentUser:action.user,
            user:action.user
        }
    }
    if(action.type==='LOGOUT'){
        sessionStorage.clear();
        return {
            isLoggedIn:false,
            currentUser:null,
            user:null
        }
    }
    return  AuthContext;
}

const AuthProvider = props => {
    const [authState,dispatch]=useReducer(authReducer,defaultAuthState);
 
     const loginHandler = (user) =>{
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('accessToken',user.accessToken)
         dispatch({
             type:'LOGIN',
             user:user,
             isLoggedIn:true,
             currentUser:user
         })
     };
     const logOutHandler = () =>{
         dispatch({
             type:'LOGOUT',
             user:null,
             isLoggedIn:false,
             currentUser:null
         })
     };
 
     const authContext = {
        isLoggedIn: JSON.parse(sessionStorage.getItem('user')) ? true:authState.isLoggedIn,
        logIn:loginHandler,
        logOut:logOutHandler,
        user:JSON.parse(sessionStorage.getItem('user'))?JSON.parse(sessionStorage.getItem('user')):null,
        currentUser:JSON.parse(sessionStorage.getItem('user'))?JSON.parse(sessionStorage.getItem('user')):null,



     }
     return <AuthContext.Provider value={authContext}>
         {props.children}
     </AuthContext.Provider>
 };
 export default AuthProvider;