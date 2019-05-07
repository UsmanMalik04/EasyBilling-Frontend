import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: HttpClient) { }

  get(url: any) {
    return this.api.get(url).subscribe(res => {
      console.log(res);
      
    })
  }

  post(url: any, data: any) {
    this.api.post(url, data).subscribe(res => {
      console.log(res);
    })
  }

  
patch(url: any, data: any) {
        this.api.patch<any>(url, data, this.getHeaders());
  }
  
  getHeaders() {
  return {
  headers: new HttpHeaders({
  // 'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': (localStorage.getItem('token')) ? 'Bearer ' + localStorage.getItem('token') : '',
  })};
  }
  
  handleError(errorType, user) {
  
  }

}








