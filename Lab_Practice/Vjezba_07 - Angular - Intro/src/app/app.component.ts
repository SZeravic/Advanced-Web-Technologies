import { Component, OnInit } from '@angular/core';

interface Student { // Definiramo novi interface
  id: number;
  fullname: string;
  birthdate: Date;
  email: string;
  address: string;
  phone: string;
  faculty: string;
  marked?: boolean; // "?" - Znaci Opcionalan
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // OnInit mogucnost da koristimo life-cycle metodu.
  // title = 'nwt-angular';
  title: string;
  // students: [];
  students: Student[];

constructor() {
    this.title = 'Hello World!';
  }
  // Life cycle hooks - funkcije koje se pozivaju o stanju
  ngOnInit() {
    this.students = this.getStudents();
  }

  // getStudents() {
  getStudents(): Student[] {
    const sviStudenti = [
      {
        id: 1,
        fullname: 'Mate Matic',
        birthdate: new Date(1996, 8, 10),
        email: 'matic@fesb.hr',
        address: 'Poljicka 3',
        phone: '091 111 2222',
        faculty: 'Fesb',
        marked: true
      },
      {
        id: 1,
        fullname: 'Ante Antic',
        birthdate: new Date(1994, 5, 12),
        email: 'matic@fesb.hr',
        address: 'Poljicka 3',
        phone: '091 111 2222',
        faculty: 'Fesb'
      },
      {
        id: 1,
        fullname: 'Ivo Ivic',
        birthdate: new Date(1995, 6, 14),
        email: 'matic@fesb.hr',
        address: 'Poljicka 3',
        phone: '091 111 2222',
        faculty: 'Fesb'
      },
      {
        id: 1,
        fullname: 'Ana Anic',
        birthdate: new Date(1996, 4, 8),
        email: 'matic@fesb.hr',
        address: 'Poljicka 3',
        phone: '091 111 2222',
        faculty: 'Fesb'
      }
    ];

    return sviStudenti;
  }
}
