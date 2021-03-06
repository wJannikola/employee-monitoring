import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'arrivals',
        loadChildren: () =>
          import('./modules/arrival/arrival.module').then(m => m.ArrivalModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
