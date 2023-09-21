import React, { useState } from "react";
import Modal from './../../../shared/modal/Modal';
import useInput from "../../../hooks/use-input";
import { isEmail, isNotEmpty } from './../../../shared/form-logics/form-logic';

const AdminSocialMedia = (props) => {
    const [showModal,setModal]=useState(false);
    const onCloseHandler = ()=>{
        setModal(false);
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



    const onSaveHandler = ()=>{

    }
    const onAddHandler =()=>{
        // alert("ADD CLICKED");
        console.log("ADD CLICKED");
        setModal(true);
    }
    return <React.Fragment>
        <div className="wrap">
            <div className="container">
                <div className="title">
                    <h2>Social Media</h2>
                </div>
                <div className="button_wrap">
                    <button className="btn btn-primary" onClick={onAddHandler}>Add</button>
                </div>
                <div className="table-wrap mt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                {/* <th scope="col">Name</th> */}
                                <th scope="col">Icon</th>
                                <th scope="col">Url</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <button className="btn btn-outline-success btn-sm">Edit</button>
                                    <button className="btn btn-outline-danger btn-sm ml-3">Delete</button>
                                </td>
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

            </div>
        </div>
        {
            showModal &&  <Modal>
            <div className="modal-header bg-primary text-white">
                <h2>Add Social Media</h2>
            </div>
            <div className="modal-body">
            <form onSubmit={onSubmitHandler} className="socialmedia-form">
                            <div className="form-group">

                                <input type="text" className={`form-control ${nameHasError && 'invalid'}`} value={nameValue}
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler} placeholder="Your Name" />
                                {nameHasError && <p className="error-text">Name is required.</p>}
                            </div>
                            <div className="form-group">
                                <input type="text" className={`form-control ${emailHasError && 'invalid'}`} value={emailValue}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler} placeholder="Your Email" />
                                {emailHasError && <p className="error-text">Email is required.</p>}
                            </div>
                            <div className="form-group">
                                <input type="text" className={`form-control ${subjectHasError && 'invalid'}`} value={subjectValue}
                                    onChange={subjectChangeHandler}
                                    onBlur={subjectBlurHandler} placeholder="Subject" />
                                {subjectHasError && <p className="error-text">Subject is required</p>}
                            </div>
                         
                            {/* <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div> */}
                        </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-danger" onClick={onCloseHandler}>Close</button>
                <button className="btn btn-success" onClick={onSaveHandler}>Save</button>
              
            </div>
        </Modal>
        }

       
    </React.Fragment>
}
export { AdminSocialMedia };