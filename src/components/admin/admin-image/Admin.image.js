import React, { useEffect, useState } from "react";
import Modal from "../../../shared/modal/Modal";
import _axiosInstance from './../../../shared/services/axios.instance';
import showAlert from "../../../shared/services/alert.service";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
const AdminImage = () => {
  const [dataList,setDataList]=useState([]);
  useEffect(() => {
    const getData = async () => {
        try {
            const result = await _axiosInstance.post('image/getimagelist');
            if (result.data.status === 'ok') {
              
        
                let resBody = result.data.data;
                setDataList(resBody);
    
            }
            else{
              setDataList([]);
            }

        } catch (error) {
            console.log("Error", error)
        }
    };

    getData();
}, []);
const getImage = async () => {
  try {
      const result = await _axiosInstance.post('image/getimagelist');
      if (result.data.status === 'ok') {
        
  
          let resBody = result.data.data;
          setDataList(resBody);

      }
      else{
        setDataList([]);
      }

  } catch (error) {
      console.log("Error", error)
  }
};



  const [showModal, setModal] = useState(false);

  const [file, setFile] = useState('');
  const isValidImageFile = (file) => {
    // console.log("FILE", file)
    const selectedFile = file.target.files[0];
    console.log("FILE", selectedFile)
    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    // Check if the file extension is in the allowed extensions array
    if (allowedExtensions.includes(fileExtension)) {
      setFile(selectedFile);
      // return true; // It's a valid image file
    } else {
      setFile('');
      alert("Invalid file type");
      // return false; // It's not a valid image file
    }
  }

  const onCloseHandler = () => {
    setModal(false);
  }
  const onAddHandler = () => {
    setModal(true);
  }
  const [type, setType] = useState('aboutme');
  const onTypeChangeHandler = (event) => {
    setType(event.target.value);
  }
  const onSaveHandler = async (e) => {
    e.preventDefault();
    if (!type || !file) {
      alert("Type and file is required");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    const res = await _axiosInstance.post('image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important to set the content type
      },
    });
    if (res.data.status === "ok") {
      showAlert('success', res.data.message);
      getImage();
    }
    else {
      showAlert('error', res.data.message);
    }
    setModal(false);

  }


  const onDeleteHandler = async (value) => {
    if (window.confirm("Are you sure you want to delete " + value.filename + "?")) {
      const res = await _axiosInstance.post('image/delete?id='+value.id,);
      if (res.data.status === 'ok') {
        showAlert('success', res.data.message);
        getImage();
      }
      else {
        showAlert('error', res.data.message);
      }
    }
  }


  let mode = 'image';




  return <React.Fragment>
    <div className="container">
      <div className="title">
        <h2>Images</h2>
      </div>
      <div className="button_wrap mt-3 mb-3">
        <button className="btn btn-primary" onClick={onAddHandler}>Add Image</button>
       
      </div>

      {
        showModal && <Modal>
          <div className="modal-header bg-primary text-white">
            <h2>Add {mode === 'image' ? 'Image' : 'Resume'}</h2>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Select Image</label>
                <input type="file" alt="fss" className="form-control" id="image" placeholder="name@example.com" onChange={isValidImageFile} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Type</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={onTypeChangeHandler}>
                  <option value={''}>Select image</option>
                  <option value='hompage'>Home Page Image</option>
                  <option value='aboutme'>About Me Image</option>

                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={onCloseHandler}>Close</button>
            <button className="btn btn-success" onClick={onSaveHandler}>Save</button>

          </div>
        </Modal>
      }



      <table className="table table-bordered">
        <thead>
          <tr>
        
            <th scope="col">FileName</th>
            <th scope="col">Type</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {(dataList && dataList.length > 0) ? dataList.map(data => {
            return (<tr key={data.id}>
              {/* <th scope="row">1</th> */}
              <td>{data.filename}</td>
              <td>{data.type}</td>
              <td>
                {/* {data.image_url} */}
                <img src={data.image_url} alt="img" height={200} width={200} className="img-thumbnail"></img>
                </td>
              <td>
                {/* <button className="btn btn-outline-danger btn-sm" onClick={()=>{}}>Delete</button> */}
                <button className="btn btn-outline-danger btn-sm ml-3"  onClick={()=>{onDeleteHandler(data)}} >Delete</button>
              </td>
            </tr>)
          }) :
            <NoRecordsRow colSpan="3" align="center"></NoRecordsRow>
          }
        </tbody>
      </table>
    </div>
  </React.Fragment>
}
export { AdminImage };