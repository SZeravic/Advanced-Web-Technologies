import React, { Component } from 'react';
import { IStudent } from '../../models/student.model';
import StudentRow from '../studentRow/studentRow';

export interface StudentProps {

}

export interface StudentState {
    students: IStudent[];
}

class StudentList extends Component<StudentProps, StudentState> {
    constructor(props: StudentProps) {
        super(props);
        this.state = { students: [] };
    }

    componentDidMount() {
        this.setState({
            students: this.getStudents(),
        })
    }

    getStudents(): IStudent[] {
        const studentList: IStudent[] = [
            {
                id: 1,
                fullName: 'Mate Matić',
                birthdate: new Date(1995, 9, 3),
                email: 'mmatic@fesb.hr',
                address: 'Vukovarska 32',
                phone: '091 111 2222',
                faculty: 'FESB'
            },
            {
                id: 2,
                fullName: 'Ivo Ivić',
                birthdate: new Date(1997, 4, 2),
                email: 'iivic@fer.hr',
                address: 'Poljička 12',
                phone: '091 222 3333',
                faculty: 'FER',
                marked: true
            },
            {
                id: 3,
                fullName: 'Ana Anić',
                birthdate: new Date(1999, 6, 21),
                email: 'aanic@fesb.hr',
                address: 'R. Boškovića 2',
                phone: '091 333 4444',
                faculty: 'FESB'
            }
        ];
        return studentList;
    }

    handleStudentClick(id:number){
        alert(id)
    }

    render() {
        return (<div className="border border-bottom-0">
                    <div className="bg-secondary d-flex p-3 text-center text-light">
                        <div className="col-1">#</div>
                        <div className="col-5">Student</div>
                        <div className="col-3">Birthdate</div>
                        <div className="col-3">Faculty</div>
                    </div>
                    <div className="tbody">
                        {this.state.students.map((student:IStudent,i:number)=>
                            <StudentRow 
                                index={i}
                                key={"studentRow"+i}
                                student={student}
                                studentClicked={(id)=>this.handleStudentClick(id)}
                            />
                        )}
                    </div>
                </div>);
    }
}

export default StudentList;