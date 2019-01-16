import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // students: IStudent[];
  students: Observable<IStudent[]>;

  // Dependency injection - Uvjek se priko ovog dodaje service
  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    // this.students = this.getStudents();
    this.students = this.studentService.getStudents();
  }

  // Vise nam netreba jer imamo service sad
  // getStudents(): IStudent[] {
  //   const studentList: IStudent[] = [
  //     {
  //       id: 1,
  //       fullName: 'Mate Matić',
  //       birthdate: new Date(1995, 9, 3),
  //       email: 'mmatic@fesb.hr',
  //       address: 'Vukovarska 32',
  //       phone: '091 111 2222',
  //       faculty: 'FESB'
  //     },
  //     {
  //       id: 2,
  //       fullName: 'Ivo Ivić',
  //       birthdate: new Date(1997, 4, 2),
  //       email: 'iivic@fer.hr',
  //       address: 'Poljička 12',
  //       phone: '091 222 3333',
  //       faculty: 'FER',
  //       marked: true
  //     },
  //     {
  //       id: 3,
  //       fullName: 'Ana Anić',
  //       birthdate: new Date(1999, 6, 21),
  //       email: 'aanic@fesb.hr',
  //       address: 'R. Boškovića 2',
  //       phone: '091 333 4444',
  //       faculty: 'FESB'
  //     }
  //   ];
  //   return studentList;
  // }

  // Find nece radit problem bio ode
  // Observable nemoze radit sa find
  viewStudent(id: number): void {
    // const clickedStudent = this.students.find(s => s.id === id);
    // this.router.navigate([`/student/${id}`, clickedStudent]);
    this.router.navigate([`/student/${id}`]);
  }
}
