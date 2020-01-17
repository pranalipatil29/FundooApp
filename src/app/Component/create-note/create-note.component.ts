import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  visible=true;
  title='';
  description='';
  isPin=false;

  constructor(
    private router: Router,
    private noteService :NoteService
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
  
      this.noteService.CreateNote(noteInfo).subscribe(Response =>
        {
            console.log("note info: ",Response['message']);
        },
        error =>{
          console.log("Error",error);
        })
    }
    else{
      console.error("Data required");
      
    }
   
  }
}
