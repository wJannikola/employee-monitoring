import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { EmployeeRoutes } from './employee-routing.module';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class EmployeeModule { }