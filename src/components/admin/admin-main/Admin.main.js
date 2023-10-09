
import React from "react"
import { Outlet, useOutlet } from "react-router-dom";
import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import "./Admin.main.css";
import { AdminHeader } from "../admin-header/Admin.header";
import { ToastContainer } from "react-toastify";
const AdminMain = () => {
    const outlet = useOutlet();
    return <React.Fragment>
        {/* {props.children} */}
        
        <div className='site-wrappers'>
            <div className='top-wraps'>
            <AdminHeader></AdminHeader>
                <AdminSideBar></AdminSideBar>

            <div className="body-section">
            <div className="content">
                    {/* <Outlet /> */}
                    {outlet}
                </div>
            </div>
            </div>
        </div>
        <ToastContainer />

    </React.Fragment>
};
export { AdminMain };