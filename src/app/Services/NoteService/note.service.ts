import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService : HttpService) { }

   CreateNote(data){
     return this.httpService.post('api/Note',data)
   }

   GetNotes()
   {
     return this.httpService.get('api/Note')
   }
}
