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
  students: Observable<IStudent[]>;

  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  viewStudent(id: number): void {
    this.router.navigate([`/student/${id}`]);
  }
}
