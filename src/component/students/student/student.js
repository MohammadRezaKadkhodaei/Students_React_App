import React from 'react';
import Button from '../../UI/button/button';
import {Link} from 'react-router-dom';
import './students.css';

const Student = (props) => {
    return(
        <div className="students">
            <label>شماره دانش آموزی: {props.id}</label>
            <label>نام دانش آموز: {props.name}</label>
            

            <label> کلاس : {props.classNumber}</label>

            <label> شماره تلفن : {props.phoneNumber}</label>

            <label> ایمیل : {props.email}</label>
            <br/>
            <div className="mT10">
            <Button
                btnType="Danger"
                clicked={props.deleted}
                >
                حذف
            </Button>
            <span className="mR10">
                <Link to={"/student/"+ props.id}>
                    <Button
                        btnType="Success"
                        >
                        ویرایش
                </Button>
                </Link>
            </span>
            </div>
        </div>
    )
}

export default React.memo(Student);