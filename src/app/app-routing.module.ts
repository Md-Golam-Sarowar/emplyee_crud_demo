import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [

  { path: "employees", component: EmployeeListComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "deleteEmployee", component: DeleteEmployeeComponent },
  { path: "updateEmployee", component: UpdateEmployeeComponent },
  { path: "searchEmployee", component: SearchEmployeeComponent },
  { path: "updateform", component: UpdateformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
