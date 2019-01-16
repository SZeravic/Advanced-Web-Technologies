import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-row',
  template: `
    <div class="col-2 col-sm-1">{{ index + 1 }}</div>
    <div class="col-6 col-sm-5">{{ student.fullName }}</div>
    <div class="d-none d-md-block col-md-2">
      {{ student.birthdate | date: 'dd.MM.yyyy' }}
    </div>
    <div class="d-none d-sm-block col-sm-3 col-md-2">{{ student.faculty }}</div>
    <div class="col-4 col-sm-3 col-md-2">
      <button type="button" class="btn btn-outline-primary">View</button>
    </div>
  `,
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent implements OnInit {
  // @ - Dekorator, koji kaze da ce varijabla student postat parrent
  @Input() student: IStudent;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
