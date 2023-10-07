import React, { useEffect, useState } from "react";
import Modal from "../../../shared/modal/Modal";
import { apiUrl } from "../../../environment/environment";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
import _axiosInstance from "../../../shared/services/axios.instance";
import showAlert from "../../../shared/services/alert.service";

import { useFormik } from "formik";
import * as Yup from "yup";


const AdminResume = () => {
  const [showModal, setModal] = useState(false);
  const [file, setFile] = useState(null);
  const formik = useFormik({
    initialValues: {
      file: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      // title: Yup.string().required("Email is required"),
      file: Yup.mixed()
      // .test('fileType', 'Invalid file format. Please select a PDF or DOC/DOCX file.', (file) => {
      //   console.log("FILE TYPE",file.type)
      //  let value = file;
      //   if (value) {
      //     return (
      //       value.type === 'application/pdf' ||
      //       value.type === 'application/msword' ||
      //       value.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      //     );
      //   }
      //   return false;
      // }),
    }),
    onSubmit: async (values) => {
      if (!file) {
        alert("Invalid file. Upload only pdf or doc file");
        return;
      }


      const formData = new FormData();
      formData.append('file', file);
      const res = await _axiosInstance.post('resume/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important to set the content type
        },
      });
      if (res.data.status === "ok") {
        showAlert('success', res.data.message);
      }
      else {
        showAlert('error', res.data.message);
      }
      setModal(false);
      getResume();
    }
  });

  const onCloseHandler = () => {
    setModal(false);
  }

  const onAddHandler = () => {
    setModal(true);
    formik.resetForm();
  }

  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getResume();
  }, []);


  const validateFile = (event) => {
    console.log("RECEIVED", event);
    const selectedFile = event.target.files[0];

    // Check if the selected file is either PDF or DOC/DOCX
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      //  return true;
      setFile(selectedFile);
    } else {
      // return false;
      alert('Invalid file');
      setFile('');
    }
  };
  const getResume = async () => {
    setModal(false);
    await _axiosInstance.get(`${apiUrl}resume/getall`).then((res) => {
      if (res.data.status === "ok") {
        setDataList(res.data.data);

      }
      else {
        setDataList([]);
      }
    })
  }


  return <React.Fragment>
    <div className="container">
      <div className="title">
        <h2>Resume</h2>
      </div>

      <div className="button_wrap mt-3 mb-3">
        <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
      </div>

      {
        showModal && <Modal>
          <div className="modal-header bg-primary text-white">
            <h2>Add Resume</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title <span className="text-danger">*</span></label>
                <input type="file" alt="fss" id="file" name="file" placeholder="pdf or doc"
                  onChange={validateFile} className="form-control"
                />
                {/* onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.file}
                  className={`form-control ${formik.errors.file && 'invalid'}`} */}

                {/* {formik.touched.file && formik.errors.file && (
                  <span className='text-danger small'>{formik.errors.file}</span>
                )} */}
              </div>


            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={onCloseHandler}>Close</button>
              <button className="btn btn-success" type="submit">Save</button>
            </div>
          </form>

        </Modal>
      }
      <div className="alert alert-warning" role="alert">
        Note: Uploading new resume will delete the previous one.
      </div>
      <table className="table table-bordered">

        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Action</th>


          </tr>
        </thead>
        <tbody>
          {(dataList && dataList.length > 0) ? dataList.map(data => {
            return (<tr key={data.id}>
              <td>{data.filename}</td>
              <td>
                <span className="badge badge-success">Active</span>
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
export { AdminResume };