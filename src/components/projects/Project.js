import React from "react";
const Project = ()=>{
    return <React.Fragment>
    <section className="myproject-section bg-color-1" id="project-wrap">
                    <div className="container">
                        <div className="myproject-heading txt-center">
                            <div className="heading-wrap">
                                <h1 className="heading-title">My Projects</h1>
                            </div>
                            <div className="heading-paragraph ">
                                <p>
                                    Some of my projects are mentioned below.
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project"/>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">AnimeInfo</a></h3>
                                        <p>
                                            A simple web project showing all the details of Japanese anime and their characters using Angular.
                                        </p>
                                        <a href="https://animeinfo-17b02.web.app/">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">FirebaseCRUD</a></h3>
                                        <p>
                                            Simple web app project providing Angular CRUD Service with Firebase authentication.
                                        </p>
                                        <a href="https://angularfirebasecrud-9607c.firebaseapp.com/#/login">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">BookingAlly</a></h3>
                                        <p>
                                            A simple android app providing booking service and allowing our place to be booked with ionic 4 and angular.
                                        </p>
                                        <a href="https://drive.google.com/file/d/1oJa-oEBJdppVd37mZQKqAECXLKcowvy3/view?usp=sharing">Download APK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">NewsApp</a></h3>
                                        <p>
                                            A simple andorid app providing news with ionic 4 and angular.
                                        </p>
                                        <a href="https://drive.google.com/file/d/1Y7LQhQLODnwsaFpgmMDu_uIiv-hqtnzm/view?usp=sharing">Download APK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">PeaceGarden</a></h3>
                                        <p>
                                            I worked as web designer of this project.
                                        </p>
                                        <a href="https://whitestroke.com/development/peacerestaurant/">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    <div className="project-icon">
                                        <img src="images/project.png" alt="project" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><a href="#" className="pointer-none">TableBook (working)</a></h3>
                                        <p>
                                            A web project providing Table booking service. (In progress)
                                        </p>
                                        {/* <!-- <a href="#">View Project</a> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
    </React.Fragment>
}
export {Project};