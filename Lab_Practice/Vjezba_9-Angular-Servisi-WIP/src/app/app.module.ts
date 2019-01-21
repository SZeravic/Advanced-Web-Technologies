import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentRowComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  // Ode moramo ubaciti Client module kako bi opce radilo
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Ako nesto nepise u modulu onda koda ga i nema
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
