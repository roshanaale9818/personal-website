import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuthorization } from './auth';
import AuthContext from './auth.context';

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
    //   const { user } = useAuth();
    // console.log("CALLED IN PROTECTED COMPONENT")
    const authCtx = useContext(AuthContext);
    console.log(authCtx)
    if (!authCtx.user) {
        alert("Unauthorized. Please log in.");
        return <Navigate to="/home" />
    }
    console.log("authCtx.user.roles[0]",authCtx.user.roles[0])
    if (!checkAuthorization(authCtx.user, requiredRole)) {
        // Redirect to unauthorized page if the user does not have the required role
        return <Navigate to="/unauthorized" />;
    }
    else {
        return <Component {...rest} />;
    }

};

export default ProtectedRoute;
