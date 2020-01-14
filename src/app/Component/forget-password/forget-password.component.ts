import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UsrService/user.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  hide=true
  forgetPasswordForm:FormGroup
  submitted = false;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      EmailID :['', [Validators.required,Validators.email]]
    });
  }

  ForgetPssword(data)
  {
    console.log("data :",this.forgetPasswordForm.value);
   
    this.userService.ForgetPassword(this.forgetPasswordForm.value).subscribe(response =>
      {
        console.log("response is : ", response);
        localStorage.setItem('Token',response['token']),
       
        this.snackBar.open(response['message'],'',{
          duration:5000,
          verticalPosition: 'top',
          horizontalPosition:'center'
        });
      },
      error =>
      {      
        console.log("Error",error);  
        this.snackBar.open(error['error']['message'] ,'',{ 
          duration:50000,
          verticalPosition: 'top',
          horizontalPosition:'center' } )
      })
  }
}
