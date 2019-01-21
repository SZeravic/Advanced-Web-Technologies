import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IStudent } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student: IStudent;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.studentService.getStudents().subscribe((students: IStudent[]) => {
        this.student = students.find((s: IStudent) => s.id === +params['id']);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
