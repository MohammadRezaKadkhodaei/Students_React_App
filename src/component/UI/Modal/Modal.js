import React from 'react';
import BackDrop from '../backDrop/BackDrop';
import './Modal.css';
const Modal = (props)=>{
    return(
        <React.Fragment>
        <BackDrop show={props.show} modalClosed={props.modalClosed}/>         
        <div className="Modal"
            style={{transform:props.show?'translateY(0)':'translateY(-100vh)',
            opacity:props.show?'1':'0'}}
        >
            {props.children}
        </div>
        </React.Fragment>  
    )
}
export default React.memo(Modal);