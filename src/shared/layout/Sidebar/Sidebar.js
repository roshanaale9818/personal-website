import React, { useContext, useEffect, useState } from "react";
import { $ } from 'react-jquery-plugin';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
    const [showMenu,setShowMenu]=useState(false);

    const onToggleHandler = ()=>{
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        console.log("CALLING USEEFFECT")
        // $('.nav-menu').hide();
        $('.navToggler').on('click', function () {
            $('.main-content').toggleClass('slide-content');
            $('.nav-wrap').toggleClass('show-menu');
            $('.inner-nav').toggleClass('show');
            $('.nav-menu').toggle();

        })
    },[])
    return <React.Fragment>

    
  <div className="site-navigation">
                <div className="button-wrap" onClick={onToggleHandler}>
                    <button id="btn-toogle" className="btn-toggle navToggler">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                </div>
                <div className={`nav-wrap ${showMenu ?'show-menu':''}`}>
                    <div className="inner-nav">
                        <ul className={`nav-menu  ${showMenu ?'d-block':'d-none'}` } id="nav-menu">
                            <li className="nav-item"><NavLink to="/home">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/skills">Skills</NavLink></li>
                            <li className="nav-item"><NavLink to="/project">Projects</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
    </React.Fragment>
}
//named exports
export { Sidebar };