import React from 'react';
import Button from '../../UI/button/button';
import './students.css';

const Student = (props) => {
    return(
        <div className="students">
            <label>شماره دانش آموزی: {props.id}</label>
            <label>نام دانش آموز</label>
            <input type="text" value={props.name} onChange={props.nameChanged}/>

            <label>کلاس</label>
            <input type="number" value={props.classNumber}/>

            <label>شماره تلفن</label>
            <input type="number" value={props.phoneNumber}/>

            <label>ایمیل</label>
            <input type="email" value={props.email}/>
            <br/>
            <div className="mT10">
            <Button
                btnType="Danger"
                clicked={props.deleted}
                >
                حذف
            </Button>
            </div>
        </div>
    )
}

export default React.memo(Student);