import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  fullName: string;
  birthdate: Date;
  email: string;
  address: string;
  phone: string;
  faculty: string;
  marked?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  students: Student[];

  ngOnInit(): void {
    this.title = 'List of students';
    this.students = this.getStudents();
  }

  getStudents(): Student[] {
    const studentList: Student[] = [
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
}
