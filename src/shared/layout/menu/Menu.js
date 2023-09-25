import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavMenu = (props)=>{
    // props will have object named data
    // {
    //     name:'string',
    //     url:'string'
    // }
    const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };
    const onMenuClicked = (data)=>{

    }
    return <React.Fragment>
        <Link to={props.data.url} className={isActive(props.data.url)}>{props.data.name}</Link>

    </React.Fragment>
}
export {NavMenu};