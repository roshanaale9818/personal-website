import React, { useEffect, useState } from "react";
import Modal from "../../../shared/modal/Modal";
import { apiUrl } from "../../../environment/environment";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
import _axiosInstance from "../../../shared/services/axios.instance";
import showAlert from "../../../shared/services/alert.service";

import { useFormik } from "formik";
import * as Yup from "yup";
// import { Link } from 'react-router-dom';


const AdminProject = () => {
  // useEffect(async () => {
  //  const data = await _axiosInstance.get(`${apiUrl}project/getProjects`);
  // }
  // , []);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await _axiosInstance.get('project/getProjects');
        console.log("ER", result);
        if (result.data.status === 'ok') {
          setProjects(result.data.data)
        }

      } catch (error) {
        console.log("Error", error)
      }
    };

    getData();
  }, [])
  const [showModal, setModal] = useState(false);
  let currentProject = {};
  const formik = useFormik({
    initialValues: {
      description: currentProject?.name || '',
      name: currentProject?.type || '',
      github_repo_link: '',
      type: ''

    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      description: Yup.string()
        .required("Description is required")
    }),
    onSubmit: async (values) => {
      console.log("values called", values);
      const res = await _axiosInstance.post(`project/${mode=='edit'?'update':'add'}`, {
        name: values.name, 
        type: values.type,
        id:mode==="edit"?currentProject.id:null,
        github_repo_link: values.github_repo_link,
        description: values.description
      });
      if (res.data.status === "ok") {
        showAlert('success', res.data.message);
      }
      else {
        showAlert('error', res.data.message);
      }
      setModal(false);
      getProjects();
    }
  });

  const onCloseHandler = () => {
    setModal(false);
  }
  const onDeleteHandler = async (value) => {
    if (window.confirm("Are you sure you want to delete " + value.name + "?")) {
      const res = await _axiosInstance.delete('project/delete?id='+value.id,);
      if (res.data.status === 'ok') {
        showAlert('success', res.data.message);
        getProjects();
      }
      else {
        showAlert('error', res.data.message);
      }
    }
  }
  const onAddHandler = () => {
    setModal(true);
    currentProject = {};
    // formik.setValues(formik.initialValues);
    formik.resetForm();
  }

  const [projectList, setProjects] = useState([]);

  const getProjects = async () => {
    setModal(false);
    _axiosInstance.get(`${apiUrl}project/getProjects`).then((res) => {
      console.log("RES", res)
      if (res.data.status === "ok") {
        console.log("RES", res)
        setProjects(res.data.data);
        currentProject = res.data.data[0];
      }
      else {
        setProjects([]);
      }
    })
  }
  const onEditHandler = (value) => {
    // console.log("EDIT CALLED", value)
    currentProject = value;
    mode = 'edit';
    formik.setValues({
      name: value.name,
      type: value.type,
     description:value.description,
     github_repo_link:value.github_repo_link 
    })
    setModal(true);
  }
  let mode = '';

  return <React.Fragment>
    <div className="container">
      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="button_wrap mt-3 mb-3">
        <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
      </div>

      {
        showModal && <Modal>
          <div className="modal-header bg-primary text-white">
            <h2>{mode === 'edit' ? 'Edit' : 'Add'} Project</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Name <span className="text-danger">*</span></label>
                <input type="text" alt="fss" id="name" name="name" placeholder="Eg. E commerce"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                  className={`form-control ${formik.errors.name && 'invalid'}`}

                />
                {formik.touched.name && formik.errors.name && (
                  <span className='text-danger small'>{formik.errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="title">Link </label>
                <input type="text" alt="fss" id="type" name="type" placeholder="Eg. E commerce"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.type}
                  className={`form-control ${formik.errors.type && 'invalid'}`}

                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Github </label>
                <input type="text" alt="fss" id="github_repo_link" name="github_repo_link" placeholder="Eg. E commerce"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.github_repo_link}
                  className={`form-control ${formik.errors.type && 'invalid'}`}

                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Description <span className="text-danger">*</span></label>
                <textarea rows={3} cols={3} type="text" alt="fss" id="description" name="description" placeholder="Eg. E commerce"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
                  className={`form-control ${formik.errors.description && 'invalid'}`}

                />
                {formik.touched.description && formik.errors.description && (
                  <span className='text-danger small'>{formik.errors.description}</span>
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
            {/* <th scope="col">Link</th> */}
            <th scope="col">Description</th>
            <th scope="col">Github Repo</th>
            {/* <th scope="col">Created At</th> */}
            <th scope="col">Action</th>


          </tr>
        </thead>
        <tbody>
          {(projectList && projectList.length > 0) ? projectList.map(data => {
            return (<tr key={data.id}>
              {/* <th scope="row">1</th> */}
              <td>{data.name}</td>
              {/* <td>
                {data.type} */}
                {/* <Link className="btn-primary small" to={data.type}   target="_blank" rel="noopener noreferrer">Click here</Link> */}
              {/* </td> */}
              <td>{data.description}</td>
              <td>{data.github_repo_link}</td>
              <td>
                <button className="btn btn-outline-success btn-sm" onClick={() => { onEditHandler(data) }}>Edit</button>
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
export { AdminProject };