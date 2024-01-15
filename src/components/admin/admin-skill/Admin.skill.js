import React, { useEffect, useState } from "react";
import Modal from "../../../shared/modal/Modal";
import { apiUrl } from "../../../environment/environment";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
import _axiosInstance from "../../../shared/services/axios.instance";
import showAlert from "../../../shared/services/alert.service";

import { useFormik } from "formik";
import * as Yup from "yup";


const AdminSkill = () => {
  const [showModal, setModal] = useState(false);
  let currentSkill = {};
  const formik = useFormik({
    initialValues: {
      title: currentSkill?.name || '',
      type: currentSkill?.type || ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Email is required"),
      type: Yup.string()
        .required("Type is required")
    }),
    onSubmit: async (values) => {
      console.log("values called", values);
      const res = await _axiosInstance.post('skill/add', { name: values.title, type: values.type });
      if (res.data.status === "ok") {
        showAlert('success', res.data.message);
      }
      else {
        showAlert('error', res.data.message);
      }
      setModal(false);
      getSkills();
    }
  });

  const onCloseHandler = () => {
    setModal(false);
  }
  const onDeleteHandler = async (value)=>{
    if(window.confirm("Are you sure you want to delete "+value.name+"?")){
     const res = await  _axiosInstance.delete('skill/delete?id='+value.id);
     if(res.data.status==='ok'){
      showAlert('success',res.data.message);
      getSkills();
     }
     else{
      showAlert('error',res.data.message);
     }
    }
  }
  const onAddHandler = () => {
    setModal(true);
    currentSkill = {};
    // formik.setValues(formik.initialValues);
    formik.resetForm();
  }

  const [dataList, setProjects] = useState([]);
  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = async () => {
    setModal(false);
    await _axiosInstance.get(`${apiUrl}skill/getskills`).then((res) => {
      if (res.data.status === "ok") {
        setProjects(res.data.data);
        currentSkill = res.data.data[0];
      }
      else {
        setProjects([]);
      }
    })
  }
  const onEditHandler = (value)=>{
    // console.log("EDIT CALLED", value)
    currentSkill = value;
    formik.setValues({
      title:value.name,
      type:value.type
    })
    setModal(true);
  }

  return <React.Fragment>
    <div className="container">
      <div className="title">
        <h2>Skill</h2>
      </div>

      <div className="button_wrap mt-3 mb-3">
        <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
      </div>

      {
        showModal && <Modal>
          <div className="modal-header bg-primary text-white">
            <h2>Add Skill</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title <span className="text-danger">*</span></label>
                <input type="text" alt="fss" id="title" name="title" placeholder="Eg. Java Programming"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
                  className={`form-control ${formik.errors.title && 'invalid'}`}

                />
                {formik.touched.title && formik.errors.title && (
                  <span className='text-danger small'>{formik.errors.title}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select id="type" name="type" className={`form-control ${formik.errors.type && 'invalid'}`}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.type}
                >
                  <option value="">Select Type</option>
                  <option value={"0"}>Technical Skill</option>
                  <option value={"1"}>Additional Skill</option>

                </select>
                {formik.touched.type && formik.errors.type && (
                  <span className='text-danger small'>{formik.errors.type}</span>
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
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            
            <th scope="col">Action</th>


          </tr>
        </thead>
        <tbody>
          {(dataList && dataList.length > 0) ? dataList.map(data => {
            return (<tr key={data.id}>
              {/* <th scope="row">1</th> */}
              <td>{data.name}</td>
              <td>{data.type ==="0" ?"Technical Skill":"Additional Skill"}</td>
              <td>
                {/* <button className="btn btn-outline-success btn-sm" onClick={()=>{onEditHandler(data)}}>Edit</button> */}
                <button className="btn btn-outline-danger btn-sm ml-3"  onClick={()=>{onDeleteHandler(data)}} >Delete</button>
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
export { AdminSkill };