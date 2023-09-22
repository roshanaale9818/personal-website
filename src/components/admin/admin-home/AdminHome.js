import React from "react"
// import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import './AdminHome.css';
const AdminHome = () => {
    return <React.Fragment>
        {/* <AdminSideBar></AdminSideBar> */}
        {/* <div className="container">
                Welcome Roshan 
                <button className="btn btn-danger">Logout</button>
            
            </div> */}
        <div className="container">
            <div className="title">
                <h2>Home</h2>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-lg-6 col-12">
                <div className="form-wrap">
                    <form name="myForm">
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <input type="text" className="form-control" name="Address" placeholder="ADDRESS" />
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="email" className="form-control" name="email" placeholder="EMAIL" minLength="5" />
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" className="form-control" name="name" placeholder="NAME" />
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text" className="form-control" name="greeting" placeholder="GREETING" />
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text" className="form-control" name="designation" placeholder="DESIGNATION" />
                            </div>
                            <div className="col-lg-12">
                                <textarea name="description" className="form-control" cols="30" rows="7" placeholder="DESCRIPTION" minLength="20"></textarea>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <textarea name="short_description" className="form-control" cols="30" rows="5" placeholder="SHORT_DESCRIPTION" minLength="20"></textarea>
                            </div>
                            <div className="col-lg-12 mt-30">
                                <button type="submit" className="btn btn-primary">SAVE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        {/* address, email,description,name,job_designation,short_description,greeting */}
    </React.Fragment>
}
export { AdminHome };