import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl = "http://localhost:8080/employee";
  getUrl = "http://localhost:8080/employee/list";
  delUrl = "http://localhost:8080/employee";
  updateUrl = "http://localhost:8080/employee"

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee) {
    return this.httpClient.post<any>(this.baseUrl, employee);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete<any>(this.delUrl + "/" + id);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.getUrl);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get<any>(this.updateUrl + "/" + id);
  }

  updateEmployee(employee: Employee, id: number) {

    return this.httpClient.put<any>(this.updateUrl + "/" + id, employee);

  }

}
