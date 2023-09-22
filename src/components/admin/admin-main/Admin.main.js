
import React from "react"
import { Outlet } from "react-router-dom";
import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import "./Admin.main.css";
const AdminMain = () => {
    return <React.Fragment>
        <div className='site-wrappers'>
            <div className='top-wraps'>
             
                <AdminSideBar></AdminSideBar>

                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    </React.Fragment>
};
export { AdminMain };