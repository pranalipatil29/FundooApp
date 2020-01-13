import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';


const routes: Routes = [
{ path : 'register', component : RegisterComponent },
{path:'login', component:LoginComponent},
{path:'forgetPassword', component:ForgetPasswordComponent},
{path:'resetPassword', component:ResetPasswordComponent}
// {path : '', redirectTo: '/register', component :RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
