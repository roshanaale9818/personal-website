import React from "react";
const Contact = ()=>{
        return <React.Fragment>
     {/* <!--Contact me starts here--> */}
                <section className="contactme-section bg-color-1" id="contact-wrap">
                    <div className="container">
                        <div className="contactme-heading txt-center">
                            <div className="heading-wrap">
                                <h1 className="heading-title">Contact Me</h1>
                            </div>
                            <div className="heading-paragraph ">
                                <p>
                                    Feel Free To Contact Me Any Time
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6 col-12">
                                <div className="icon-wrap">
                                    <div className="contact-list">
                                        <div className="item-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="contactme-content">
                                            <h3 className="item-title">Address</h3>
                                            <div className="item-text">Mid Baneshwor , Kathmandu</div>
                                            <div className="item-text">Nepal</div>
                                        </div>
                                    </div>
                                    <div className="contact-list">
                                        <div className="item-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="contactme-content">
                                            <h3 className="item-title">Email</h3>
                                            <div className="item-text">roshanaale54@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="contact-list">
                                        <div className="item-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="contactme-content">
                                            <h3 className="item-title">Phone</h3>
                                            <div className="item-text">+977 9818009826</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="form-wrap">
                                    <form name="myForm" onsubmit="return(validate())">
                                        <div className="row">
                                            <div className="col-lg-12 form-group">
                                                <input type="text" className="form-control" name="fullName" placeholder="FULLNAME" />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <input type="email" className="form-control" name="email" placeholder="EMAIL" minlength="5" />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="SUBJECT" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="message" className="form-control" cols="30" rows="7"  placeholder="YOUR MESSAGE" minlength="20"></textarea>
                                            </div>
                                            <div className="col-lg-12 mt-30">
                                                <button type="submit" className="download-btn">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--Contact me ends here-->
                <!--Footer starts here--> */}
                <footer className="site-footer bg-color-2">
                    <div className="container">
                        <div className="footer-wrap">
                            <div className="copyright txt-center">
                                ©2020 RoshanAaleMagar. All Rights Reserved. Terms and Privacy
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!--Footer ends here--> */}
        </React.Fragment>
}
export {Contact};