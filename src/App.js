import React from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';


function App() {
  return (
    <React.Fragment>
    <RouterProvider router={routes}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
