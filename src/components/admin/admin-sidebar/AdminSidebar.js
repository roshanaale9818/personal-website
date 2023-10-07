import React from "react"
// import { Link } from "react-router-dom";
import { NavMenu } from "../../../shared/layout/menu/Menu";
import { Link, useNavigate } from "react-router-dom";
const AdminSideBar = () => {
    const onNavigate = useNavigate();
    const onLogOutHandler = () => {
        console.log("ON LOG OUT CALLED");
        // const yes = confirm("Are you sure you want to logout?");
        if(window.confirm("Are you sure to logout?")){
            onNavigate("/home");
        }
        // else{}
    }
    const navLinks = [
        {
            name: "Home",
            url: '/admin/home'
        },
        {
            name: "Images",
            url: '/admin/images'
        },
        {
            name: "Personal Info",
            url: '/admin/personalinfo'
        },
        {
            name: "Skills",
            url: '/admin/skill'
        },
        {
            name: "Projects",
            url: '/admin/projects'
        },
        {
            name: "Message",
            url: '/admin/message'
        },
        {
            name: "Social Media",
            url: '/admin/socialmedia'
        },
        {

            name: "Users",
            url: '/admin/users'
        },
        {

            name: "Upload Resume",
            url: '/admin/resume'
        }
    ]
    return <React.Fragment>
        <div className="sidebar">
            {navLinks.map(x => {
                return <NavMenu key={x.name} data={x}></NavMenu>
            })}

        </div>
    </React.Fragment>
}
export { AdminSideBar };