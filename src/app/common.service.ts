import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL:any = environment.baseURL;
  users :any = [];  
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.baseURL);
  }

  addUser(data:any){
    return this.http.post(this.baseURL,data);
  }
}
