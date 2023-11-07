import React, { useReducer } from "react";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import { Sidebar } from "../../shared/layout/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import AuthContext from "../../shared/services/providers/auth.context";
const Main = () => {
    const outlet = useOutlet();
    const location = useLocation();

    // 'location.pathname' contains the current route
    const currentRoute = location.pathname;
    return <React.Fragment>
        <div className='site-wrapper'>
            <div className='top-wrap'>

                {

                    // currentRoute ==='admin/login' &&
                    <Sidebar />
                }

                <div className="main-content" id="home">
                    {/* <Outlet /> */}
                    {outlet}
                </div>
            </div>
        </div>
        <ToastContainer />
    </React.Fragment>
}
export { Main };