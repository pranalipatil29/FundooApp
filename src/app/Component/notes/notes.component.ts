import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(
    private router : Router,
    private noteService : NoteService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit() {

   
     this.GetNotes()
  }
// getAll Notes

   notes=[];
 
   GetNotes()
   {
     this.noteService.GetNotes().subscribe(response=>{
       this.notes=response['data'];

       console.log("data : ",this.notes);
     },
    error =>
    {                
      console.log("Error",error); 
    })
   } 


}
