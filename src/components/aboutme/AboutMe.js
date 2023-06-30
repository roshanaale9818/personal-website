import React from "react";
const AboutMe = ()=>{
return <React.Fragment>
      {/* <!--About me starts--> */}
                <section class="aboutme-section bg-color-1" id="aboutmewrap">
                    <div class="container">
                        <div class="aboutme-wrap">
                            <div class="heading-wrap">
                                <h1 class="heading-title">About Me</h1>
                            </div>
                            <div class="heading-paragraph">
                                <p>
                                    Who am I ? Get to know me.
                                </p>
                            </div>
                            <div class="heading-line">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-12">
                                <div class="about-img txt-center mt-50">
                                    <img src="images/aboutme.jpg" alt="fig" />
                                </div>
                                <div class="download-wrap txt-center">
                                    <a href="download/roshanaalemagar.
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    " class="download-btn" download="roshanaalemagar" target="_blank">DOWNLOAD RESUME <i class="fa fa-download ml-2"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-12">
                                <div class="item-wrap sub-title">
                                    <h3 class="item-title">
                                        Roshan Aale Magar
                                    </h3>
                                    <div class="item-subtitle">
                                        FrontEnd Developer
                                    </div>
                                    <div class="item-paragraph">
                                        <p>
                                            I am a dedicated, hardworking and proactive web developer very interested in front-end development. I am strategic thinker who is passionate about helping clients to reach theirs goals. I have ability to craft unique user interface and highly functional
                                            products while still maintaining proper aesthetics.

                                        </p>
                                    </div>
                                    <div class="personal-info">
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <div class="info-list">
                                                    <ul>
                                                        <li><span>Birthday:</span> 05. 31.1998</li>
                                                        <li><span>Address:</span>MidBaneshwor,Kathmandu</li>
                                                        <li><span>Age:</span> 20 years</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <div class="info-list">
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