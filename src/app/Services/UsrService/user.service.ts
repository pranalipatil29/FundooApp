import { Injectable } from '@angular/core';
import {HttpService} from './../HttpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService : HttpService) { }

  Login(data)
  {
    return this.httpService.post('api/Account/Login',data)
  }
}
