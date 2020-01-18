import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  visible=true;
  title='';
  description='';
  isPin = false;

  constructor(
    private router: Router,
    private noteService :NoteService,
    private snackBar :MatSnackBar
  ) { }

  ngOnInit() {
   
  }

  CreateNote(data)
  {
    this.visible=true

    if(this.title || this.description)
    {
      console.log("data: ",this.title,this.description);
  
      let noteInfo={
        title : this.title,
        description:this.description,
        // reminder: "2020-01-17T12:36:21.145Z",
        // color: "#F00",
        // isArchive: true,
        isPin: this.isPin,
        // isTrash: true,
        // image: "string"
      };
  
       this.title=''
       this.description=''
       this.isPin = false
  

      this.noteService.CreateNote(noteInfo).subscribe(response =>
        {
            console.log("note info: ",response['message']);
            this.snackBar.open(response['message'],'',{
              duration:2000,
              verticalPosition: 'top',
              horizontalPosition:'center'
            });    
          
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
    else{
      this.isPin = false
      console.error("Data required");     
    }
  }
}
