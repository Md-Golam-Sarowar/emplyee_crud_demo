import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService, private router: Router) {

  }

  SearchEmployeeData() {
    this.employeeService.updateEmployee(this.id).subscribe(data => {
      if (data) {
        this.employee = data;
        console.log(this.employee);
      }
      else {
        alert("Employee not found in the database!!!");
      }
    })
  }

  ngOnInit(): void {

  }

}
