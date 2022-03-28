import { LoginComponent } from './login/login.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student-form/:id', component: StudentFormComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
