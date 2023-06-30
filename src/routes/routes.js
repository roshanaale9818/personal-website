
import {createBrowserRouter} from 'react-router-dom';
import { Main } from '../components/main/Main';
import ErrorPage from './../shared/ErrorPage/ErrorPage';
import { Home } from '../components/Home/Home';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
        ]
    }
]);
export {routes};