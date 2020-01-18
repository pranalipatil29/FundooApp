import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { NotesComponent } from './Component/notes/notes.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';


const routes: Routes = [
{ path : 'register', component : RegisterComponent },
{path:'login', component:LoginComponent},
{path:'forgetPassword', component:ForgetPasswordComponent},
{path:'resetPassword/:token', component:ResetPasswordComponent},
 {path : '', redirectTo: '/login', pathMatch:'full'},
 {path: 'displayNote',component:DisplayNoteComponent},
{path : 'dashboard',component:DashboardComponent ,children: [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full'
  },
  {
    path: 'notes', component: NotesComponent
  },
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
