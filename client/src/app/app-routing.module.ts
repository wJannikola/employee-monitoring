import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './modules/employee/pages/employee-create/employee-create.component';
import { EmployeeEditComponent } from './modules/employee/pages/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './modules/employee/pages/employee-list/employee-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/employees-list', pathMatch: 'full' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
