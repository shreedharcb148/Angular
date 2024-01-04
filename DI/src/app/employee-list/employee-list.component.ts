import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  public employees=[];

  constructor(private _eS : EmployeeService){}

  ngOnInit(): void {
      this._eS.getEmployees()
        .subscribe(data=> this.employees = data);
  }
}
