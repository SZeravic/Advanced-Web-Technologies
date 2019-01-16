import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student: IStudent;
  private subscription: any;

  // Dependency injection unutar kreiranja classe omoguci mi da mogu koristit sve sto moze koristit Activatedroute
  // Private je samo da imamo limit unutar classe
  constructor(private route: ActivatedRoute, private studentService: StudentService) {}


  // Life-Cycle hooks - mora biti ubacenje "implements OnInit, On Destroy"
  // Student Details - Params - Parametri koje smo slali unutar URLA
  // Ako pise .subscribe onda params znaci da je
  // <> znaci "Generic"
  // Observable znaci da je asikrono
  // Ako imamo subscribe to je kao da smo se subscriblali na YT canal olitiga subscribali smo se na parmetre
  // Ima 3 Callback funkcije - Kad se subscribamo, unsubscribamo i init
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      // this.student = params as IStudent; // // - Nista ovo!
      // Student geter nasm se nalazi u servicima pa ga moramo nasljedit u construktoru
      this.studentService.getStudents().subscribe((students: IStudent[]) => {
        // Params je object u kojemu imamo id
        // params['id'] je bilo krivo zbog === jer nisu imali isti tip
        // + Castamo u number
        // sad radimo a asyncronim kodom pa kad dobijemo studenta onda se prije loada view nego student iz hitmla a nemamo ga još
        // Tekkad zavsi hhtp zahtjev onda smo dobili podatke
        // 2 Nacina kako ovo propravit
        // "?" Provjeri jeli postoji ako je student NULL ili undefined ali ako ima onda mi trazi "Student-details- html"
        this.student = students.find((s: IStudent) => s.id === +params['id']);
        console.log(this.student);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
