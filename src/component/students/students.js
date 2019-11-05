import React from 'react';
import Student from './student/student';
import './student/students.css';

const Students = (props) => {
    let studentsList = (
        props.studentsList.map((student,index) =>
        <Student
        key={index}
        id={student.id}
        name={student.name}
        classNumber={student.classNumber}
        phoneNumber={student.phoneNumber}
        email={student.email}
        nameChanged={(event)=> props.nameChanged(event,student.id)}
        deleted={props.deleted}
        />)
    )
    if(props.toggle){
        return(
            <div className="student-section">
                {studentsList}
            </div>
        )
    }
    return studentsList;
}

export default React.memo(Students);