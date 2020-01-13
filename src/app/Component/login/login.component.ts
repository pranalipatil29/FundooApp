import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide=true
  loginForm:FormGroup
  submitted = false;
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      email :['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

  // get f() { return this.loginForm.controls; }

  //   OnSubmit() {
  //       this.submitted = true;

  //       // stop here if form is invalid
  //       if (this.loginForm.invalid) {
  //           return;
  //       }
  //       alert('Successfully logedin!! :-)')
  //   }
}
