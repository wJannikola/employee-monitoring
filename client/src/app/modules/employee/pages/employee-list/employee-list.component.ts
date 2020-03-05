import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../../../shared/service/employee/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor(
    private employeeService: EmployeeService
  ) {
    this.readEmployee();
  }

  ngOnInit(): void {
    console.log('employees init');
  }

  readEmployee() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.Employee = data;
    })
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
      this.employeeService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
      }
      )
    }
  }

}
