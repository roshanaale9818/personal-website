import React from 'react';
import { Navigate, Route } from 'react-router-dom';
// import { useAuthorization } from './useAuthorization';
import { checkAuthorization } from './auth';

const GuardRoutes = ({ path, requiredRole, children }) => {
  const isAuthorized = checkAuthorization(requiredRole);

  return (
    <Route
      path={path}
      render={() => {
        if (!isAuthorized) {
          // Redirect to unauthorized page if the user does not have the required role
          return <Navigate to="/" />;
        }

        // Render the module's children if logged in and has the required role
        return {children};
      }}
    />
  );
};

export default GuardRoutes;
