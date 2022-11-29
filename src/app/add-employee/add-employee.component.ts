import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  addEmployeeData() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      alert("Employee Data Saved Successfully!!!");
      this.redirectToemployeeList();
    }, error => alert("unable to insert data!!")

    )
  }

  redirectToemployeeList() {
    this.router.navigate(["/employees"]);
  }

}
