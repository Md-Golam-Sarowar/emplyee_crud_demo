import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl = "http://localhost:8080/employee";

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee) {
    return this.httpClient.post<any>(this.baseUrl, employee);
  }
}
