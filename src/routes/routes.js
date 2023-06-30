
import {createBrowserRouter} from 'react-router-dom';
import { Main } from '../components/main/Main';
import ErrorPage from './../shared/ErrorPage/ErrorPage';
import { Home } from '../components/Home/Home';
import { Skill } from '../components/skill/Skill';
import { Project } from '../components/projects/Project';
import { Contact } from '../components/contact/Contact';


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/skills', element: <Skill /> },
            { path: '/project', element: <Project /> },
            { path: '/contact', element: <Contact /> },


        ]
    }
]);
export {routes};