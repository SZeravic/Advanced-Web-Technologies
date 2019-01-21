import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>('/assets/students.json');
  }
}
