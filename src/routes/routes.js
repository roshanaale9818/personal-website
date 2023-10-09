
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
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
import ProtectedRoute from '../shared/services/providers/protected.component';
import ROLES from '../shared/services/providers/auth';
// import ProtectedRoute from '../shared/services/providers/protected.component';
const MAIN_PAGES = [{ path: '/home', element: <Home /> },
{ path: '/skills', element: <Skill /> },
{ path: '/project', element: <Project /> },
{ path: '/contact', element: <Contact /> },
{ path: '/signup', element: <Signup /> },
{ path: '/admin/login', element: <Login /> }];

const mainPageChildren = () => {
    return
}

// const routes =  createBrowserRouter([
//     {
//         path:'/',
//         element:<Main/>,
//         errorElement:<ErrorPage/>,
//         children:[
//             { index: true, element: <Home /> },
//             { path: '/home', element: <Home /> },
//             { path: '/skills', element: <Skill /> },
//             { path: '/project', element: <Project /> },
//             { path: '/contact', element: <Contact /> },
//             { path: '/signup', element: <Signup /> },
//             { path: '/admin/login', element: <Login /> },

//         ]
//     },
//     {
//         path:'/admin',
//         element:<AdminMain></AdminMain>,
//         errorElement:<ErrorPage/>,
//         children:[
//             // { index: true, element: <Login /> },
//             // { path: '/admin/login', element: <Login /> },
//             { path: '/admin/home', element: <AdminHome /> },
//             { path: '/admin/message', element: <AdminMessage /> },
//             { path: '/admin/personalinfo', element: <AdminPersonalInfo /> },
//             { path: '/admin/socialmedia', element: <AdminSocialMedia /> },
//             { path: '/admin/users', element: <AdminUsers /> },
//             { path: '/admin/projects', element: <AdminProject /> },
//             { path: '/admin/skill', element: <AdminSkill /> },
//             { path: '/admin/images', element: <AdminImage /> },
//             { path: '/admin/resume', element: <AdminResume /> },


//         ]
//     },

// ]);
const routes = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/'
        element={<Main />}
        errorElement={<ErrorPage />}
    >
        <Route index path='/' element={<Home />} replace>
        </Route>
        <Route index path='/home' element={<Home />}>
        </Route>
        <Route path='/skills' element={<Skill />}>
        </Route>
        <Route path='/project' element={<Project />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/admin/login' element={<Login />}>
        </Route>
        <Route path='/unauthorized' element={<h1 className='text-center'>You are not authorized.</h1>}>
        </Route>
    </Route>,

    <Route path='/admin'
        element={<AdminMain />}
        errorElement={<ErrorPage />}
    >
        <Route index path='' element={ <ProtectedRoute component={AdminHome} requiredRole={ROLES.ADMIN} />  }>
        </Route>
        <Route path='/admin/home' element={ <ProtectedRoute component={AdminHome} requiredRole={ROLES.ADMIN} />  }>
        </Route>
        <Route  path='/admin/message'   element={ <ProtectedRoute component={AdminMessage} requiredRole={ROLES.ADMIN}></ProtectedRoute>} >
        </Route>
        <Route path='/admin/personalinfo'element={ <ProtectedRoute component={AdminPersonalInfo} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/socialmedia' element={ <ProtectedRoute component={AdminSocialMedia} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/users' element={ <ProtectedRoute component={AdminUsers} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/projects' element={ <ProtectedRoute component={AdminProject} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/skill' element={ <ProtectedRoute component={AdminSkill} requiredRole={ROLES.ADMIN}></ProtectedRoute>} >
        </Route>
        <Route path='/admin/images' element={ <ProtectedRoute component={AdminImage} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/resume' element={ <ProtectedRoute component={AdminResume} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        
    </Route>
    </>
))
export { routes };