import React, { useState } from "react";
import Modal from "../../../shared/modal/Modal";
import useInput from "../../../hooks/use-input";
import { isEmail, isNotEmpty } from "../../../shared/form-logics/form-logic";
const AdminProject = ()=>{
  const [showModal, setModal] = useState(false);

  const onCloseHandler = () => {
    setModal(false);
  }
  const onAddHandler = () => {
    // alert("ADD CLICKED");
    console.log("ADD CLICKED");
    setModal(true);
  }
  const onSaveHandler = (e) => {
    e.preventDefault();

  }


  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);


  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

    return  <React.Fragment>

      
        <div className="container">
        <div className="title">
            <h2>Projects</h2>
        </div>

        <div className="button_wrap mt-3 mb-3">
        <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
      </div>

      {
        showModal && <Modal>
          <div className="modal-header bg-primary text-white">
            <h2>Add Project</h2>
          </div>
          <div className="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="file" alt="fss" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
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
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </React.Fragment>
}
export{ AdminProject};