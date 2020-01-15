import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UsrService/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide=true
  registrationForm:FormGroup
  submitted = false;
  

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private router: Router,
    private snackBar: MatSnackBar 
    ){ 
  }
  

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      UserName : ['',Validators.required],
      EmailID :['', [Validators.required,Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]],
      ServiceType : ['',Validators.required],
      ConformPassword : ['',[Validators.required,Validators.minLength(6)]]
    }, {validator: this.CheckPassword}); 
  }

  CheckPassword(group : FormGroup)
  {
    let password = group.get('Password').value;
    let conformPassword = group.get('ConformPassword').value;
    return password === conformPassword ? null : { notSame : true }
  }

  Registration(data)
  {
    console.log("data:",this.registrationForm.value);

    let userData = {
      firstName : this.registrationForm.value.FirstName,
      lastName : this.registrationForm.value.LastName,
      userName : this.registrationForm.value.UserName,
      emailID : this.registrationForm.value.EmailID,
      password : this.registrationForm.value.Password,
      serviceType : this.registrationForm.value.ServiceType
    }

    this.userService.Register(userData).subscribe(response =>{
      console.log('response from registration :',response);

      this.snackBar.open(response['message'],'',{
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition:'center'
      });    
      this.router.navigate(['/login']);
    },
    error =>
    {      
      console.log("Error",error);  
      this.snackBar.open(error['error']['message'] ,'Error Occured',{ 
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition:'center' } )
    })
  }
}
