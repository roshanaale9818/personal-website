import React, { useEffect } from "react"
// import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import './AdminHome.css';

import { toast } from "react-toastify";
import _axiosInstance from "../../../shared/services/axios.instance";
import * as Yup from "yup";
import { useFormik } from "formik";

const AdminHome = () => {
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('home/gethome');
                if (result.data.status === 'ok') {

                    let resBody = result.data.data;
                    formik.setValues({
                        address: resBody.address,
                        name: resBody.name,
                        email: resBody.email,
                        designation: resBody.job_designation,
                        description: resBody.description,
                        short_description: resBody.short_description,
                        greeting:resBody.greeting
                    })
                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getData();
    }, [])


    const formik = useFormik({
        initialValues: {
            address: '',
            email: '',
            description: '',
            greeting: '',
            short_description: '',
            designation: '',
            name: ''
        },
        // enableReinitialize: true,
        validationSchema: Yup.object().shape({
            address: Yup.string().required("Address is required"),
            email: Yup.string().email()
                .required("Email is required"),
            greeting: Yup.string().required("Greeting is required"),
            description: Yup.string()
                .required("Description is required"),
            short_description: Yup.string()
                .required("Short Description is required"),
            designation: Yup.string()
                .required("Short Description is required"),
                name: Yup.string()
                .required("Name is required")
        }),
        onSubmit: async (values) => {
            console.log("values called", values);
            const res = await _axiosInstance.post(`home/save`, {
                address: values.address,
                name: values.name,
                email: values.email,
                job_designation: values.designation,
                description: values.description,
                short_description: values.short_description,
                greeting:values.greeting
            });
            if (res.data.status === "ok") {
                showAlert('success', res.data.message);
            }
            else {
                showAlert('error', res.data.message);
            }


        }
    });

    const showAlert = (type, message) => toast[
        type
    ](message);

    return <React.Fragment>
        {/* <AdminSideBar></AdminSideBar> */}
        {/* <div className="container">
                Welcome Roshan 
                <button className="btn btn-danger">Logout</button>
            
            </div> */}
        <div className="container">
            <div className="title">
                <h2>Home</h2>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-lg-6 col-12">
                <div className="form-wrap">
                    <form name="myForm" onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-12 form-group">

                                <input type="text" id="address" name="address"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
                                    className={`form-control ${formik.errors.address && 'invalid'}` } placeholder="ADDRESS"
                                />
                                {formik.touched.address && formik.errors.address && (
                                    <span className='text-danger small'>{formik.errors.address}</span>
                                )}
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" id="email" name="email"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                                    className={`form-control ${formik.errors.email && 'invalid'}`}
                                    placeholder="EMAIL"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <span className='text-danger small'>{formik.errors.email}</span>
                                )}
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" id="name" name="name"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                                    className={`form-control ${formik.errors.name && 'invalid'}`}
                                    placeholder="NAME"
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <span className='text-danger small'>{formik.errors.name}</span>
                                )}
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text" id="greeting" name="greeting"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.greeting}
                                    className={`form-control ${formik.errors.greeting && 'invalid'}`}
                                    placeholder="GREETING"
                                />
                                {formik.touched.greeting && formik.errors.greeting && (
                                    <span className='text-danger small'>{formik.errors.greeting}</span>
                                )}
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text" id="designation" name="designation"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.designation}
                                    className={`form-control ${formik.errors.designation && 'invalid'}`}
                                    placeholder="DESIGNATION"
                                />
                                {formik.touched.designation && formik.errors.designation && (
                                    <span className='text-danger small'>{formik.errors.designation}</span>
                                )}
                            </div>
                            <div className="col-lg-12">

                                <textarea name="description" id="description"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
                                    className={`form-control ${formik.errors.description && 'invalid'}`} cols="30" rows="7" placeholder="DESCRIPTION" minLength="20"></textarea>

                                {formik.touched.description && formik.errors.description && (
                                    <span className='text-danger small'>{formik.errors.description}</span>)}
                            </div>
                            <div className="col-lg-12 mt-3">
                                <textarea name="short_description" id="short_description"
                                         placeholder="SHORT_DESCRIPTION"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.short_description}
                                    className={`form-control ${formik.errors.short_description && 'invalid'}`} cols="30" rows="7"  minLength="20"></textarea>

                                {formik.touched.short_description && formik.errors.short_description && (
                                    <span className='text-danger small'>{formik.errors.short_description}</span>)}

                            </div>
                            <div className="col-lg-12 mt-30">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        {/* address, email,description,name,job_designation,short_description,greeting */}
    </React.Fragment>
}
export { AdminHome };