import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {

  }

  addEmployeeData() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      alert("Employee Data Saved Successfully!!!");
    }, error => alert("unable to insert data!!")

    )
  }

}
