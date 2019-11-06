import React, {useState, useEffect} from 'react';
import NewStudent from '../component/students/newStudent/newStudent';
import {Redirect} from 'react-router-dom';

const AddStudent = (props) =>{
    const [studentsState,setStudents] = useState([
        {id: 0, name: 'shahin', classNumber: 204, phoneNumber: 1234, email: 'shahin.kadkhdoaei@gmail.com'},
        {id: 1, name: 'komeil', classNumber: 2045, phoneNumber: 12345, email: 'komeil.mehranfar@gmail.com'},
        {id: 2, name: 'pooya', classNumber: 20456, phoneNumber: 12346, email: 'pooya.behtarino@gmail.com'},
        {id: 3, name: 'reza', classNumber: 204567, phoneNumber: 12347, email: 'ghilam.abbasi@gmail.com'},
    ])
    const [studentName,setStudentName] = useState('');
    const [studentClass,setStudentClass] = useState('');
    const [studentPhoneNumber,setStudentPhoneNumber] = useState('');
    const [studentEmail,setStudentEmail] = useState('');
    const [result,setResult] = useState(false);
    const studentNameHandler = (event) =>{
      setStudentName(event.target.value);
    }
    
    const studentClassHandler = (event) =>{
      setStudentClass(event.target.value);
    }
  
    const studentPhoneNumberHandler = (event) =>{
      setStudentPhoneNumber(event.target.value);
    }
  
    const studentEmailHandler = (event) =>{
      setStudentEmail(event.target.value)
    }
  
    const addStudent = () =>{
    //   const newStudentsState = [...studentsState];
    //   newStudentsState.push({
    //     'id':studentsState.length,
    //     'name':studentName,
    //     'classNumber':studentClass,
    //     'phoneNumber':studentPhoneNumber,
    //     'email':studentEmail
    //   })
    //   setStudents(newStudentsState);
    alert('student added')
      setStudentName('');
      setStudentClass('');    
      setStudentPhoneNumber('');   
      setStudentEmail('');
      setResult(true);
    }
    let redirect = null;
    if(result){
      redirect = <Redirect to="/" />
    }
    return(
        <React.Fragment>
          {redirect}
            <NewStudent
                studentName={studentName}
                studentClass={studentClass}
                studentPhoneNumber={studentPhoneNumber}
                studentEmail={studentEmail}
                studentNameHandler={studentNameHandler}
                studentClassHandler={studentClassHandler}
                studentPhoneNumberHandler={studentPhoneNumberHandler}
                studentEmailHandler={studentEmailHandler}
                addStudent={addStudent}
            />
        <br/>
        </React.Fragment>
    )
}
export default AddStudent;