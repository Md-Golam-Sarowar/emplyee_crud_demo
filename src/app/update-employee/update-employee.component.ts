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
  show: boolean = false;

  constructor(private employeeService: EmployeeServiceService, private router: Router) {
  }

  SearchEmployeeData() {
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      if (data) {
        this.employee = data;
        this.show = true;
        console.log(this.employee);
      }
      else {
        alert("Employee not found in the database!!!");
      }
    })
  }

  updateEmployeeData() {
    this.employeeService.updateEmployee(this.employee, this.id).subscribe(data => {
      if (data) {
        alert("Employee Data updated Successfully!!!");
        this.redirectToemployeeList();
      }
      else {
        alert("Employee not found in the database!!!");
      }
    }, error => alert("unable to insert data!!")

    )
  }

  redirectToemployeeList() {
    this.router.navigate(["/employees"]);
  }

  ngOnInit(): void {

  }

}
