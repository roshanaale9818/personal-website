
import {createBrowserRouter} from 'react-router-dom';
import { Main } from '../components/main/Main';
import ErrorPage from './../shared/ErrorPage/ErrorPage';
import { Home } from '../components/Home/Home';
import { Skill } from '../components/skill/Skill';
import { Project } from '../components/projects/Project';
import { Contact } from '../components/contact/Contact';
import { Login } from '../components/login/Login';
import { AdminMain } from '../components/admin/admin-main/Admin.main';
import { AdminHome } from '../components/admin/admin-home/AdminHome';
import { AdminMessage } from '../components/admin/admin-message/AdminMessage';
import { AdminPersonalInfo } from '../components/admin/admin-personalinfo/Admin.personalinfo';
import { AdminSocialMedia } from '../components/admin/admin-socialmedia/Admin.socialmedia';
import { AdminUsers } from '../components/admin/admin-users/Admin.users';
import { AdminProject } from '../components/admin/admin-project/Admin.project';
import { AdminSkill } from '../components/admin/admin-skill/Admin.skill';
import { AdminImage } from '../components/admin/admin-image/Admin.image';
import { Signup } from '../components/signup/Signup';
import { AdminResume } from '../components/admin/admin-resume/Admin.resume';


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
            { path: '/signup', element: <Signup /> },
           

        ]
    },
    {
        path:'/admin',
        element:<AdminMain/>,
        errorElement:<ErrorPage/>,
        children:[
            { index: true, element: <Login /> },
            { path: '/admin/login', element: <Login /> },
            { path: '/admin/home', element: <AdminHome /> },
            { path: '/admin/message', element: <AdminMessage /> },
            { path: '/admin/personalinfo', element: <AdminPersonalInfo /> },
            { path: '/admin/socialmedia', element: <AdminSocialMedia /> },
            { path: '/admin/users', element: <AdminUsers /> },
            { path: '/admin/projects', element: <AdminProject /> },
            { path: '/admin/skill', element: <AdminSkill /> },
            { path: '/admin/images', element: <AdminImage /> },
            { path: '/admin/resume', element: <AdminResume /> },


        ]
    },
    
]);
export {routes};