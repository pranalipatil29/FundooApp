import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService : HttpService) { }

  Login(data)
  {
    return this.httpService.post('api/Admin/Login',data)
  }

  Register(data)
  {
    return this.httpService.post('api/Admin/Register',data);
  }

  ForgetPassword(data)
  {
    return this.httpService.post('api/Admin/ForgetPassword',data);
  }

  ResetPassword(data)
  {
    return this.httpService.put('api/Admin/ResetPassword',data);
  }
}
