import React from 'react';
import './button.css';
const Button = (props) =>{
    let clasess= ["Button"];
    switch(props.btnType){
        case "Danger":
            clasess.push('Danger');
            break;
        case "Success":
            clasess.push('Success');
            break;
        default:
            break;
    };
    return(
        <button
         className={clasess.join(' ')}
         onClick={props.clicked}   
        >
            {props.children}
        </button>
    )
}
export default React.memo(Button);

