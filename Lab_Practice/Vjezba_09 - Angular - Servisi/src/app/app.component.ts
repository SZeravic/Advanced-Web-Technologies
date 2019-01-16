import { Component, OnInit } from '@angular/core';

@Component({ // Svaka componenta je classa
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Css se nece prenosit na djecu komponenata, nego samo za tu komponentu
})
export class AppComponent implements OnInit {
  title: string;

  ngOnInit(): void { // Kad se metoda pozove onda se inicijalizira -- Life cycle -- metoda
    this.title = 'List of students';
  }
}
