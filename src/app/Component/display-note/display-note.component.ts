import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { not } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  title=''
  description=''

  constructor(
    private router : Router,
    private noteService : NoteService,
    private snackBar : MatSnackBar
  ) { 
    
  }

  ngOnInit() {  
   
  }
}
