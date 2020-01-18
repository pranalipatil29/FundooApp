import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private snackBar : MatSnackBar,
    private router :Router
  ) { }

  name="Keep";
  profilePic = ''

  ngOnInit() {

    this.profilePic= localStorage.getItem('Profilepicture');
  
  }

  LogOut()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}