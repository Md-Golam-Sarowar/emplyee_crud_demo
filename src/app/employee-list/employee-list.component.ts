import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {

    this.employeeService.getAllEmployees().subscribe(data => {
      this.employeeList = data;
    }, error => alert("unable to insert data!!")

    )

  }

}


