import React from "react"
// import { Link } from "react-router-dom";
import { NavMenu } from "../../../shared/layout/menu/Menu";
const AdminSideBar = () => {
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
        }
    ]
    return <React.Fragment>
        <div className="sidebar">
            {/* <Link class="active" href="#home">Home</Link>
            <Link href="#news">Images</Link>
            <Link href="#contact">Skills</Link>
            <Link href="#about">Personal Info</Link>
            <Link href="#about">Messages</Link>
            <Link href="#about">Users</Link> */}
            {navLinks.map(x=>{
               return <NavMenu key={x.name} data={x}></NavMenu>
            })}
        </div>
    </React.Fragment>
}
export { AdminSideBar };