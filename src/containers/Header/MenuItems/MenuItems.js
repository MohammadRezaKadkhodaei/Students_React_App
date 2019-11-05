import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './MenuItems.css';
const MenuItems = () =>{
    return(
        <ul className="MenuItems">
           <MenuItem link="/" active>صفحه اصلی</MenuItem>
           <MenuItem link="/add-student">دانش‌ آموزان</MenuItem>
        </ul>
    )
}
export default MenuItems;