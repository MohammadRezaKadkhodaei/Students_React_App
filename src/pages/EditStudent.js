import React,{useEffect, useState} from 'react';
import Button from '../component/UI/button/button';
import {Redirect} from 'react-router-dom';

const EditStudent = (props) =>{
    const [result,setResult] = useState(false);
    useEffect(()=>{
        console.log(props);
        
    },[])
    const editStudent = () =>{
        alert('edit');
        setResult(true)
    }
    let redirect = null;
    if(result){
      redirect = <Redirect to="/" />
    }
    return(
        <React.Fragment>
            {redirect}
        <div className="newStudent">
            <h1>ویرایش دانش آموز</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text"/>

            <label>کلاس</label>
            <input type="number"/>

            <label>شماره تلفن</label>
            <input type="number"/>

            <label>ایمیل</label>
            <input type="email"/>
            <br/>
            <div className="alignCenter mV20">
                <Button clicked={editStudent} btnType="Success">
                    ویرایش اطلاعات
                </Button>
            </div>
        </div>
    </React.Fragment>
    )
}
export default EditStudent;