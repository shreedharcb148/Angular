import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './emplyoee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>("http://localhost:8083/users/getallusers");
    // return [
    //   {"id":1,"name":"shreedhar","age":25},
    //   {"id":2,"name":"dada","age":26},
    //   {"id":3,"name":"mahi","age":26},
    //   {"id":4,"name":"omi","age":24}
    // ];
  }
}
