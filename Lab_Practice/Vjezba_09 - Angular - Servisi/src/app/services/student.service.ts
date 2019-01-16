import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student.model';
// Dekorator - Kaze nesto o clasi (daje meta podatke o classi)
@Injectable({
  providedIn: 'root'
})
// Kreirana opet classa
export class StudentService {
  constructor(private httpclient: HttpClient) { }

  // Metoda ce vracat this.httpClient (dohvacamo JSON file)
  // Ako neznamo strukturu podataka onda mozemo staviti samo "Any"
  getStudents() : Observable<IStudent[]> {
    return this.httpclient.get<IStudent[]>('/assets/students.json');
  }
}
