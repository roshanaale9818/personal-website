import React from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import AuthProvider from './shared/services/providers/auth.provider';


function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <RouterProvider router={routes}>
          
        </RouterProvider>
      </AuthProvider>
    </React.Fragment>

  );
}

export default App;
