import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRowComponent } from './student-row/student-row.component';

const routes: Routes = [
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'students', component: StudentRowComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
