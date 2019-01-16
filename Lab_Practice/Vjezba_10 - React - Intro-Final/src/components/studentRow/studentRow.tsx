import React, { Component } from 'react';
import { IStudent } from '../../models/student.model';
import classNames from 'classnames';
import './studentRow.css';

export interface StudentRowProps {
    index: number;
    student: IStudent;
    studentClicked: (id: number) => void; 
}
 
export interface StudentRowState {
    
}
 
class StudentRow extends React.Component<StudentRowProps, StudentRowState> {
    constructor(props: StudentRowProps) {
        super(props);
    }
    render() { 

        let {index, student, studentClicked} = this.props;

        const rowClasses = classNames({
            "d-flex": true,
            "p-3": true,
            "student-row": true,
            "text-center": true,
            "border-bottom": true, 
            "active": student.marked,
        });
        
        return ( 
            <div className={rowClasses} onClick={()=>studentClicked(student.id)}>
                <div className="col-1" >{ index + 1 }</div>
                <div className="col-5">{ student.fullName }</div>
                <div className="col-3">{ student.birthdate.toLocaleDateString() }</div>
                <div className="col-3">{ student.faculty }</div>
            </div> );
    }
}
 
export default StudentRow;