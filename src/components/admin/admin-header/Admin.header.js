import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.header.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthComponent } from "../../../shared/components/Auth";
import AuthContext from "../../../shared/services/providers/auth.context";



const AdminHeader  = ()=>{
  const authCtx=useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = ()=>{
      if(window.confirm("Are you sure you want to logout?")){
          authCtx.logOut();
          sessionStorage.clear();
          navigate('/home');
          window.location.replace('/home');
      }
  }
return <React.Fragment>
    
<header className="admin-header">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={""}>Personal Admin</Link>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button onClick={onLogout} className="btn btn-outline-danger my-2 my-sm-0" type="button">Logout</button>

    </form>
  </div>
</nav>
</header>
<ToastContainer />
</React.Fragment>
};
export {AdminHeader};