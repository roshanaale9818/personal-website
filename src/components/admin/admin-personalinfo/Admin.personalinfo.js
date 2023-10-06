import React, { useEffect, useState } from "react";
import "./Admin.personalinfo.css";
import showAlert from "../../../shared/services/alert.service";
import _axiosInstance from "../../../shared/services/axios.instance";
import { useFormik } from "formik";
import * as Yup from "yup";
const AdminPersonalInfo = () => {
    const formik = useFormik({
        initialValues: {
            address: '',
            email: '',
            education: '',
            phone: ''

        },
        // enableReinitialize: true,
        validationSchema: Yup.object().shape({
            address: Yup.string().required("Address is required"),
            email: Yup.string().email()
                .required("Email is required"),
            education: Yup.string().required("Education is required"),
            phone: Yup.string()
                .required("Phone is required")
        }),
        onSubmit: async (values) => {
            console.log("values called", values);
            const res = await _axiosInstance.post(`personalinfo/save`, {
                address: values.address,
                email: values.email,
                education: values.education,
                phone: values.phone
            });
            if (res.data.status === "ok") {
                showAlert('success', res.data.message);
            }
            else {
                showAlert('error', res.data.message);
            }


        }
    });
    let mode = '';
    const [personalInfo, setPersonalInfo] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('personalinfo/getPersonalInfo');
                // console.log("ER", result);
                if (result.data.status === 'ok') {
                    setPersonalInfo(result.data.data);
                    let resBody=result.data.data;
                    console.log("personalinfo",personalInfo)
                    formik.setValues({
                        email:resBody.email,
                        phone:resBody.phone,
                        address:resBody.address,
                        education:resBody.education,
                    })
                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getData();
    }, [])

    return <React.Fragment>
        <fieldset>
            <legend>PersonalInfo:</legend>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
                        className={`form-control ${formik.errors.address && 'invalid'}`}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <span className='text-danger small'>{formik.errors.address}</span>
                    )}
            
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                        className={`form-control ${formik.errors.email && 'invalid'}`} />

                    {formik.touched.email && formik.errors.email && (
                        <span className='text-danger small'>{formik.errors.email}</span>
                    )}

                </div>
                <div className="form-group">
                    <label htmlFor="education">Education:</label>
                    <input  type="education" id="education" name="education" 
                     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.education}
                     className={`form-control ${formik.errors.education && 'invalid'}`} 
                    />

                    {formik.touched.education && formik.errors.education && (
                  <span className='text-danger small'>{formik.errors.education}</span>
                )}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input  type="education" id="phone" name="phone" 
                     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                     className={`form-control ${formik.errors.phone && 'invalid'}`} 
                    />

                    {formik.touched.phone && formik.errors.phone && (
                  <span className='text-danger small'>{formik.errors.phone}</span>
                )}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Save </button>
            </form>
        </fieldset>
    </React.Fragment>
}
export { AdminPersonalInfo };