import React from 'react';
import './newStudent.css';
import Button from '../../UI/button/button'
const NewStudent = (props) =>{
    const {studentName, studentClass, studentPhoneNumber,
         studentEmail ,studentNameHandler, studentClassHandler,
          studentPhoneNumberHandler, studentEmailHandler} = props;
    return(
        <div className="newStudent">
            <h1>اضافه کردن دانش آموز</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler}/>

            <label>کلاس</label>
            <input type="number" value={studentClass} onChange={studentClassHandler}/>

            <label>شماره تلفن</label>
            <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler}/>

            <label>ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler}/>
            <br/>
            <div className="alignCenter mV20">
                <Button clicked={props.addStudent} btnType="Danger">
                    اضافه کردن
                </Button>
            </div>
        </div>
    )
}
export default React.memo(NewStudent);