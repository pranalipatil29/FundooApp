import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UsrService/user.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router  } from '@angular/router';
// import { readSync } from 'fs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hide=true
  resetPasswordForm : FormGroup
  submitted = false

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private snackBar :MatSnackBar,
    private route : ActivatedRoute ,
    private router :Router

  ) { }
  
  
  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      Password : ['', [Validators.required, Validators.minLength(6)]],
      ConformPassword : ['',[Validators.required,Validators.minLength(6)]],
    }, {validator: this.CheckPassword});
  }

  CheckPassword(group : FormGroup)
  {
    let password = group.get('Password').value;
    let conformPassword = group.get('ConformPassword').value;
    return password === conformPassword ? null : { notSame : true }
  }

  ResetPassword(data)
  {
    const token = this.route.snapshot.paramMap.get('token');

    let resetPassword ={
      token : token,
      password : this.resetPasswordForm.value.Password
    }

    this.userService.ResetPassword(resetPassword).subscribe(response => {
       
      console.log("response from reset password",response);

      this.snackBar.open(response['message'],'',{
        duration:2000,
        verticalPosition:'top',
        horizontalPosition:'center'
      });
      this.router.navigate(['/login']);
    },
    error => {
      console.log("Error : ",error);
      this.snackBar.open(error['error']['message'],'Error Occured',{
        duration :2000,
        horizontalPosition:'center',
        verticalPosition:'top'
      })
    });
  }
}


