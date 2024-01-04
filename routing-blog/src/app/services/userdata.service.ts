import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url : string ="http://localhost:8083/users/getallusers";
  constructor(private http: HttpClient) { }

  usersfromSBapplication(){
    return this.http.get(this.url);
  }
  users(){
    return [
      {name:"shree",age:26,email:"shree@gmail.com"},
      {name:"mahi",age:26,email:"mahi@gmail.com"},
      {name:"dada",age:26,email:"dada@gmail.com"}
    ]
  }
  saveUser(data : any){
    return this.http.post("http://localhost:8083/users/create_user",data);
  }
}
