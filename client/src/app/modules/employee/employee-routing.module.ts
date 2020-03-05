import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

const routes: Routes = [
    { path: 'create', component: EmployeeCreateComponent },
    { path: 'edit/:id', component: EmployeeEditComponent },
    { path: 'list', component: EmployeeListComponent }
];

export const EmployeeRoutes = RouterModule.forChild(routes);