import classes from './Modal.module.css';
import React from 'react';
import  ReactDOM from 'react-dom';
const Backdrop =(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}>Close</div>
};

const ModalOverlay = (props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}
const portElements = document.getElementById('overlays');
const Modal = (props)=>{
    // console.log("MODAL CALLED");
    return <React.Fragment>
        {/* <Backdrop/>
        <ModalOverlay/> */}
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portElements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portElements)}
    </React.Fragment>
}
export default Modal;