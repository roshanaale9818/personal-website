
import React from "react"
import { Outlet } from "react-router-dom";
import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import "./Admin.main.css";
import { AdminHeader } from "../admin-header/Admin.header";
const AdminMain = () => {
    return <React.Fragment>
        
        <div className='site-wrappers'>
            <div className='top-wraps'>
            <AdminHeader></AdminHeader>
                <AdminSideBar></AdminSideBar>

            <div className="body-section">
            <div className="content">
                    <Outlet />
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
};
export { AdminMain };