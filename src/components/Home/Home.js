import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { AboutMe } from "../aboutme/AboutMe";
const Home = () => {
    return <>
        <section className="main-banner-section">
            <div className="container">
                <div className="content-section">
                    <div className="top-content">
                        <div className="item-img">
                            <img src="images/roshanaalemagar2.jpg" alt="img" />
                        </div>
                        <div className="item-content">
                            <div className="item-top-text">
                                Hello
                            </div>
                            <div className="item-title">
                                <h1>I am Roshan Aale Magar.</h1>
                            </div>
                            <div className="item-intro">
                                <h2>
                                    <span> A Web Developer.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="item-social">
                            <ul>
                                <li><Link to="https://www.linkedin.com/in/roshanaale9818" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin"></i>
                                </Link></li>
                                <li><Link to="https://github.com/roshanaale9818" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github"></i></Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AboutMe />
    </>
}
export { Home };