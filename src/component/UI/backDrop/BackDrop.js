import React from 'react';
import './BackDrop.css';
const BackDrop=(props)=>(
    props.show?<div className="Backdrop" onClick={props.modalClosed}></div>:null
)
export default BackDrop