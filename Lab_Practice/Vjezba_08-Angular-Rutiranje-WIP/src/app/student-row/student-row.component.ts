import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent implements OnInit {
  constructor(private router: Router) {
  }

  getStudents() {
    const studentList = [
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

  viewStudent(id: number): void {
    // const clickedStudent = this.students.find(s => s.id === id);
    // this.router.navigate([`/student/${id}`, clickedStudent]);
    this.router.navigate([`/student/${id}`]);
  }

  ngOnInit() {
  }

}
