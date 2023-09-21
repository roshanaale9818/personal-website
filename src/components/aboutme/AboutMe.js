import React from "react";
const AboutMe = ()=>{
return <React.Fragment>
      {/* <!--About me starts--> */}
                <section className="aboutme-section bg-color-1" id="aboutmewrap">
                    <div className="container">
                        <div className="aboutme-wrap">
                            <div className="heading-wrap">
                                <h1 className="heading-title">About Me</h1>
                            </div>
                            <div className="heading-paragraph">
                                <p>
                                    Who am I ? Get to know me.
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="about-img txt-center mt-50">
                                    <img src="images/aboutme.jpg" alt="fig" />
                                </div>
                                <div className="download-wrap txt-center">
                                    <a href="download/roshanaalemagar" className="download-btn" download="roshanaalemagar" target="_blank">DOWNLOAD RESUME <i className="fa fa-download ml-2"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="item-wrap sub-title">
                                    <h3 className="item-title">
                                        Roshan Aale Magar
                                    </h3>
                                    <div className="item-subtitle">
                                        FrontEnd Developer
                                    </div>
                                    <div className="item-paragraph">
                                        <p>
                                            I am a dedicated, hardworking and proactive web developer very interested in front-end development. I am strategic thinker who is passionate about helping clients to reach theirs goals. I have ability to craft unique user interface and highly functional
                                            products while still maintaining proper aesthetics.

                                        </p>
                                    </div>
                                    <div className="personal-info">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <div className="info-list">
                                                    <ul>
                                                        <li><span>Birthday:</span> 05. 31.1998</li>
                                                        <li><span>Address:</span>MidBaneshwor,Kathmandu</li>
                                                        <li><span>Age:</span> 20 years</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="info-list">
                                                    <ul>
                                                        <li><span>Mail:</span> roshanaale54@gmail.com</li>
                                                        {/* <!-- <li><span>Phone:</span> 9818009826</li> --> */}
                                                        <li><span>Study:</span> BIT</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--About me Ends--> */}
</React.Fragment>
}
export {AboutMe};