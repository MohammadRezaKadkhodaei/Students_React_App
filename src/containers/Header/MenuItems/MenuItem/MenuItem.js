import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuItem.css';
const MenuItem = (props) =>{
    return(
        <li className="MenuItem">
            <NavLink to={props.link} exact>
                {props.children}
            </NavLink>
        </li>
    )
}

export default MenuItem;