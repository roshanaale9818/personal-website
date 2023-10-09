import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { Sidebar } from "../../shared/layout/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
const Main = () => {
    const outlet = useOutlet();
    return <React.Fragment>
        <div className='site-wrapper'>
            <div className='top-wrap'>
                <Sidebar />
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