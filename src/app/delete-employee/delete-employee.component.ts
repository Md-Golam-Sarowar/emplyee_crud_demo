import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id: number = 0;

  constructor(private employeeService: EmployeeServiceService, private router: Router) {

  }

  ngOnInit(): void {

  }

  deleteEmployeeData() {
    this.employeeService.deleteEmployee(this.id).subscribe(data => {
      if (data) {
        alert("Employee Data Deleted Successfully!!!");
        this.redirectToemployeeList();
      }
      else {
        alert("Employee not found in the database!!!");
      }
    }, error => { alert("unable to insert data!!") }

    )
  }

  redirectToemployeeList() {
    this.router.navigate(["/employees"]);
  }

}
