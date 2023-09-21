import React from "react"
// import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import './AdminHome.css';
const AdminHome = ()=>{
    return <React.Fragment>
            {/* <AdminSideBar></AdminSideBar> */}
            <div className="container">
                Welcome Roshan 
                <button className="btn btn-danger">Logout</button>
            
            </div>
    </React.Fragment>
}
export {AdminHome};