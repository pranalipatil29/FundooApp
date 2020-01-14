import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UsrService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide=true
  loginForm:FormGroup
  submitted = false;
  
  constructor(
     private formBuilder : FormBuilder,
     private userService : UserService,
     private router: Router
     ) { 
  }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      EmailID :['', [Validators.required,Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]]
    });  
  } 

  get f() { return this.loginForm.controls; }

  Login(data)
  {
    console.log("data :",this.loginForm.value);
    this.userService.Login(this.loginForm.value).subscribe(response =>
      {
        console.log("response is : ", response);
        localStorage.setItem('Token',response['token']),
        localStorage.setItem('FirstName',response['data']['firstName']),
        localStorage.setItem('LastName',response['data']['lastName']),
        localStorage.setItem('EmailID',response['data']['emailID']),
        localStorage.setItem('Profilepicture',response['data']['profilepicture'])
      },
      error =>
      {
        console.log("Error",error);      
      })
  }
}