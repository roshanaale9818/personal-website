import React from "react";
import { Link } from "react-router-dom";
import "./Admin.header.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHeader  = ()=>{
    const notify = () => toast.error("Wow so easy!");
return <React.Fragment>
    
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={""}>Personal Admin</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> 
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

    </ul>
    <form className="form-inline my-2 my-lg-0">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <button onClick={notify} className="btn btn-outline-danger my-2 my-sm-0" type="button">Logout</button>

    </form>
  </div>
</nav>
</header>
<ToastContainer />
</React.Fragment>
};
export {AdminHeader};