import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit{

  public employees=[];
  constructor(private _eS : EmployeeService){}

  ngOnInit(): void {
    this._eS.getEmployees()
      .subscribe(data=> this.employees = data);
  }
}
