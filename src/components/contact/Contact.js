import React, { useEffect, useState } from "react";
import showAlert from "../../shared/services/alert.service";
import _axiosInstance from "../../shared/services/axios.instance";
import * as Yup from "yup";
import { useFormik } from "formik";

const Contact = () => {
const [personalInfo,setPersonalInfo]= useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('personalinfo/getPersonalInfo');
                // console.log("ER", result);
                if (result.data.status === 'ok') {
                    setPersonalInfo(result.data.data);
                    let resBody=result.data.data;
                    setPersonalInfo(resBody);
                    // console.log("personalinfo",personalInfo)

                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getData();
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '', email: '', subject: '', message: ''

        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            subject: Yup.string()
                .required("Subject is required"),
            message: Yup.string()
                .required("Message is required")
        }),
        onSubmit: async (values) => {
            // console.log("values called", values);
            // let body = {
            //     name: '', email: '', subject: '', message: ''
            // }
            const res = await _axiosInstance.post(`contact/sendmessage`, values);
            if (res.data.status === "ok") {
                showAlert('success', res.data.message);
            }
            else {
                showAlert('error', res.data.message);
            }

        }
    });
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
                                    <div className="item-text">{(personalInfo && personalInfo.address) ? personalInfo.address:'-' }</div>
                                    {/* <div className="item-text">Nepal</div> */}
                                </div>
                            </div>
                            <div className="contact-list">
                                <div className="item-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="contactme-content">
                                    <h3 className="item-title">Email</h3>
                                    <div className="item-text">{(personalInfo && personalInfo.email) ? personalInfo.email:'-' }</div>

                                </div>
                            </div>
                            <div className="contact-list">
                                <div className="item-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contactme-content">
                                    <h3 className="item-title">Phone</h3>
                                    <div className="item-text">{(personalInfo && personalInfo.phone) ? personalInfo.phone:'-' }</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="form-wrap">
                            <form name="myForm" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <input type="text" name="name" placeholder="FULLNAME"
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                                            className={`form-control ${formik.errors.name && 'invalid'}`}

                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <span className='text-danger small'>{formik.errors.name}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="email" name="email" id="email" placeholder="EMAIL"
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                                            className={`form-control ${formik.errors.email && 'invalid'}`}

                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <span className='text-danger small'>{formik.errors.email}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="text" name="subject" placeholder="FULLNAME"
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject}
                                            className={`form-control ${formik.errors.subject && 'invalid'}`}

                                        />
                                        {formik.touched.subject && formik.errors.subject && (
                                            <span className='text-danger small'>{formik.errors.subject}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="message" cols="30" rows="7" placeholder="YOUR MESSAGE" 
                                                         onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}
                                                         className={`form-control ${formik.errors.message && 'invalid'}`}
             
                                                     />
                                                     {formik.touched.message && formik.errors.message && (
                                                         <span className='text-danger small'>{formik.errors.message}</span>
                                                     )}
                                                     
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
export { Contact };