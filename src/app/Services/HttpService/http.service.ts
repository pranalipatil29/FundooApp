import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL= environment.BaseURl

  constructor(private httpClient: HttpClient) { }

  post(url,data)
  {
    let options=
          {
          headers:new HttpHeaders
          ({
            'Authorization':'Bearer '+localStorage.getItem('Token'),
            'Content-Type':'application/json'
          })
        }
        console.log(data)
    return this.httpClient.post(this.baseURL+url, data, options);
  }

  put(url,data)
  {
      let options=
      {
        headers:new HttpHeaders
        ({
          'Authorization':'Bearer'+localStorage.getItem('token'),
          'Content-Type':'application/json'
        })
     } 
     
    return this.httpClient.put(this.baseURL+url, data, options);
  }
}
