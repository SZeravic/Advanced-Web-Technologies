import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  AllStudents = [
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

  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  returnToList(): void {
    this.router.navigate([`/students`]);
  }

  ngOnInit() {
  }

}
