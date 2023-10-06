import React, { useEffect, useState } from "react";
import Modal from "../../../shared/modal/Modal";
import { apiUrl } from "../../../environment/environment";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
import _axiosInstance from "../../../shared/services/axios.instance";
import showAlert from "../../../shared/services/alert.service";

import { useFormik } from "formik";
import * as Yup from "yup";
// import { Link } from 'react-router-dom';


const AdminSocialMedia = () => {
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('socialmedia/getsocialmedia');
                console.log("ER", result);
                if (result.data.status === 'ok') {
                    setData(result.data.data)
                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getData();
    }, [])
    const [showModal, setModal] = useState(false);
    //   let currentProject = {};
    const formik = useFormik({
        initialValues: {
            url: '',
            name: '',
            icon: '',


        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            icon: Yup.string()
                .required("Icon is required"),
            url: Yup.string()
                .required("Url is required")
        }),
        onSubmit: async (values) => {
            console.log("values called", values);
            const res = await _axiosInstance.post(`socialmedia/${'save'}`, {
                name: values.name,
                icon: values.icon,
                url: values.url,

            });
            if (res.data.status === "ok") {
                showAlert('success', res.data.message);
            }
            else {
                showAlert('error', res.data.message);
            }
            setModal(false);
            getSocialMediaList();
        }
    });

    const onCloseHandler = () => {
        setModal(false);
    }
    const onDeleteHandler = async (value) => {
        if (window.confirm("Are you sure you want to delete " + value.name + "?")) {
            const res = await _axiosInstance.delete('socialmedia/delete?id=' + value.id,);
            if (res.data.status === 'ok') {
                showAlert('success', res.data.message);
                getSocialMediaList();
            }
            else {
                showAlert('error', res.data.message);
            }
        }
    }
    const onAddHandler = () => {
        setModal(true);
        formik.resetForm();
    }

    const [projectList, setData] = useState([]);

    const getSocialMediaList = async () => {
        setModal(false);
        _axiosInstance.get(`${apiUrl}socialmedia/getsocialmedia`).then((res) => {
            console.log("RES", res)
            if (res.data.status === "ok") {
                console.log("RES", res)
                setData(res.data.data);
            }
            else {
                setData([]);
            }
        })
    }

    let mode = '';

    return <React.Fragment>
        <div className="container">
            <div className="title">
                <h2>Social Media</h2>
            </div>

            <div className="button_wrap mt-3 mb-3">
                <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
            </div>

            {
                showModal && <Modal>
                    <div className="modal-header bg-primary text-white">
                        <h2>{mode === 'edit' ? 'Edit' : 'Add'} Social Media</h2>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="title">Name <span className="text-danger">*</span></label>
                                <input type="text" alt="fss" id="name" name="name" placeholder="Linked In"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                                    className={`form-control ${formik.errors.name && 'invalid'}`}

                                />
                                {formik.touched.name && formik.errors.name && (
                                    <span className='text-danger small'>{formik.errors.name}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Url </label>
                                <input type="text" alt="fss" id="url" name="url" placeholder="Eg. http://socialmedia.com"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.url}
                                    className={`form-control ${formik.errors.url && 'invalid'}`}

                                />
                                {formik.touched.url && formik.errors.url && (
                                    <span className='text-danger small'>{formik.errors.url}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Icon </label>
                                <input type="text" alt="fss" id="icon" name='icon' placeholder="fa-fa-linked"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.icon}
                                    className={`form-control ${formik.errors.icon && 'invalid'}`}

                                />
                                {formik.touched.icon && formik.errors.icon && (
                                    <span className='text-danger small'>{formik.errors.icon}</span>
                                )}
                            </div>





                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={onCloseHandler}>Close</button>
                            <button className="btn btn-success" type="submit">Save</button>
                        </div>
                    </form>

                </Modal>
            }
            <table className="table table-bordered">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Url</th>
                        <th scope="col">Icon</th>
                        <th scope="col">Action</th>


                    </tr>
                </thead>
                <tbody>
                    {(projectList && projectList.length > 0) ? projectList.map(data => {
                        return (<tr key={data.id}>
                            {/* <th scope="row">1</th> */}
                            <td>{data.name}</td>
    
                            <td>{data.url}</td>
                            <td>{data.icon}</td>
                            <td>
                                <button className="btn btn-outline-danger btn-sm ml-3" onClick={() => { onDeleteHandler(data) }} >Delete</button>
                            </td>
                        </tr>)
                    }) :
                        <NoRecordsRow colSpan="3" align="center"></NoRecordsRow>
                    }

                </tbody>
            </table>
        </div>

        {/* <SignInForm></SignInForm> */}
    </React.Fragment>
}
export { AdminSocialMedia };