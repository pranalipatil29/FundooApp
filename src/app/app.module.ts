import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { materialModule } from './app.material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HttpClientModule }    from '@angular/common/http';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
