import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
