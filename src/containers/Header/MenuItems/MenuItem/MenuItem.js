import React from 'react';
import './MenuItem.css';
const MenuItem = (props) =>{
    let classess = [];
    if(props.active){
        classess.push('active')
    }
    return(
        <li className="MenuItem">
            <a href={props.link} className={classess}>
                {props.children}
            </a>
        </li>
    )
}

export default MenuItem;