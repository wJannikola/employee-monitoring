import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ArrivalRoutes } from './arrival-routing.module';
import { ArrivalCreateComponent } from './pages/arrival-create/arrival-create.component';
import { ArrivalEditComponent } from './pages/arrival-edit/arrival-edit.component';
import { ArrivalListComponent } from './pages/arrival-list/arrival-list.component';

@NgModule({
  declarations: [
    ArrivalCreateComponent,
    ArrivalEditComponent,
    ArrivalListComponent
  ],
  imports: [
    CommonModule,
    ArrivalRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ArrivalModule { }