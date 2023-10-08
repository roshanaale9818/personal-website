import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../shared/layout/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
const Main = () => {
    return <React.Fragment>
        <div className='site-wrapper'>
            <div className='top-wrap'>
                <Sidebar />
                <div className="main-content" id="home">
                    <Outlet />
                </div>
            </div>
        </div>
        <ToastContainer />
    </React.Fragment>
}
export { Main };