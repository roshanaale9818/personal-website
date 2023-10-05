import React, { useEffect, useState } from "react"
// import { AdminSideBar } from "../admin-sidebar/AdminSidebar";
import './AdminHome.css';
import axios from "axios";
import { apiUrl } from "../../../environment/environment";
import useInput from "../../../hooks/use-input";
import { isNotEmpty } from "../../../shared/form-logics/form-logic";
import { toast } from "react-toastify";
const AdminHome = () => {
    const [homeData, setHomeData] = useState({});
    // address, email,description,name,job_designation,short_description,greeting
    // const initValue = ()=>{

    // }

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [jobDesig, setJobDesig] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [greeting, setGreeting] = useState('');


    const {
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress,
        // setInitValue:initFirstValue
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isNotEmpty);
    const {
        value: desscriptionValue,
        isValid: descriptionIsValid,
        hasError: descriptionHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
        reset: resetDescription,
    } = useInput(isNotEmpty);
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);
    const {
        value: jobDesignationValue,
        isValid: jobDesignationIsValid,
        hasError: jobDesignationHasError,
        valueChangeHandler: jobDesignationChangeHandler,
        inputBlurHandler: jobDesignationBlurHandler,
        reset: resetJobDesignation,
    } = useInput(isNotEmpty);
    const {
        value: shortDescriptionValue,
        isValid: shortDescriptionIsValid,
        hasError: shortDescriptionHasError,
        valueChangeHandler: shortDescriptionChangeHandler,
        inputBlurHandler: shortDescriptionBlurHandler,
        reset: resetShortDescription,
    } = useInput(isNotEmpty);
    const {
        value: greetingValue,
        isValid: greetingIsValid,
        hasError: greetingHasError,
        valueChangeHandler: greetingChangeHandler,
        inputBlurHandler: greetingBlurHandler,
        reset: resetGreeting,
    } = useInput(isNotEmpty);

    const onAddressChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setAddress(event.target.value)
    }

    const onEmailChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setEmail(event.target.value)
    }
    const onNameChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setName(event.target.value)
    }
    const onGreetingChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setGreeting(event.target.value)
    }
    const onJobDesigChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setJobDesig(event.target.value)
    }
    const onDescriptionChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setDescription(event.target.value)
    }
    const onShortDescChangeHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setShortDesc(event.target.value)
    }
    const getHomeData = async () => {
        if(!localStorage.getItem('token')){
            return;
        }
        await axios.get(`${apiUrl}home/gethome`, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then((res) => {
            if (res.data.status === "ok") {
                setHomeData(res.data.data);
                console.log("HOME VALUES ", homeData)
                setAddress(homeData['address']);
                
            }
        }).catch((err)=>{
            // showAlert('error',err.data.response.message)
            console.error("Unauthorized");
        })
    }
    useEffect(() => {

        getHomeData();
    }, []);

    const showAlert = (type, message) => toast[
        type
    ](message);
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!addressIsValid || !emailIsValid || !descriptionIsValid || !nameIsValid || !jobDesignationIsValid || !shortDescriptionIsValid || !greetingIsValid) {
            showAlert("error", "All fields are required");
            return;
        }
        else {
            let body = {
                address: addressValue,
                email: emailValue,
                description: desscriptionValue,
                name: nameValue,
                job_designation: jobDesignationValue,
                short_description: shortDescriptionValue,
                greeting: greetingValue
            }

            await axios.post(`${apiUrl}home/save`, body, {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then((res) => {
                if (res.data.status === "ok") {
                    setHomeData(res.data.data);
                    showAlert("success", "Saved Successfull");
                }
                else {
                    showAlert("error", res.data.message)
                }
            })
        }
    }
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
                    <form name="myForm" onSubmit={onSubmitHandler}>
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <input type="text"  name="Address" placeholder="ADDRESS" 
                                className={`form-control ${addressHasError && 'invalid'}`} value={addressValue}
                                onChange={addressChangeHandler}
                                onBlur={addressBlurHandler} 
                                />
                                {/* <input type="text" name="Address" placeholder="ADDRESS"
                                    className={`form-control`} value={address}
                                    onChange={onAddressChangeHandler}
                                /> */}
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="email"  name="email" placeholder="EMAIL" minLength="5"
                                       className={`form-control ${emailHasError && 'invalid'}`} value={emailValue}
                                       onChange={emailChangeHandler}
                                       onBlur={emailBlurHandler} 
                                />
                                {/* <input type="email" name="Email" placeholder="EMAIL"
                                    className={`form-control`} value={email}
                                    onChange={onEmailChangeHandler}
                                /> */}
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text"  className={`form-control ${nameHasError && 'invalid'}`} value={nameValue}
                                onChange={nameChangeHandler}
                                onBlur={nameBlurHandler}  name="name" placeholder="NAME" />
                                {/* <input type="text" name="name" placeholder="NAME"
                                    className={`form-control`} value={name}
                                    onChange={onNameChangeHandler}
                                /> */}
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text"        className={`form-control ${greetingHasError && 'invalid'}`} value={greetingValue}
                                onChange={greetingChangeHandler}
                                onBlur={greetingBlurHandler}  name="greeting" placeholder="GREETING" />
                                {/* <input type="text" name="greeting" placeholder="ADDRESS"
                                    className={`form-control`} value={greeting}
                                    onChange={onGreetingChangeHandler}
                                /> */}
                            </div>
                            <div className="col-lg-12 form-group">
                                <input type="text"        className={`form-control ${jobDesignationHasError && 'invalid'}`} value={jobDesignationValue}
                                onChange={jobDesignationChangeHandler}
                                onBlur={jobDesignationBlurHandler}  name="designation" placeholder="DESIGNATION" />

                                {/* <input type="text" name="Address" placeholder="DESIGNATION"
                                    className={`form-control`} value={jobDesig}
                                    onChange={onJobDesigChangeHandler}
                                /> */}
                            </div>
                            <div className="col-lg-12">

                                {/* <textarea name="description" className={`form-control`} value={description}
                                    onChange={onDescriptionChangeHandler}
                                    cols="30" rows="7" placeholder="DESCRIPTION" minLength="20"></textarea> */}
                                <textarea name="description"        className={`form-control ${descriptionHasError && 'invalid'}`} value={desscriptionValue}
                                onChange={descriptionChangeHandler}
                                onBlur={descriptionBlurHandler}  cols="30" rows="7" placeholder="DESCRIPTION" minLength="20"></textarea>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <textarea name="short_description" className={`form-control ${shortDescriptionHasError && 'invalid'}`} value={shortDescriptionValue}
                                    onChange={shortDescriptionChangeHandler}
                                    onBlur={shortDescriptionBlurHandler} cols="30" rows="5" placeholder="SHORT_DESCRIPTION" minLength="20"></textarea>
                                {/* <textarea name="short_description" className={`form-control`} value={shortDesc}
                                    onChange={onShortDescChangeHandler}
                                    cols="30" rows="5" placeholder="SHORT_DESCRIPTION" minLength="20"></textarea> */}
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