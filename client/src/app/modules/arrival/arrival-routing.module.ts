import { Routes, RouterModule } from '@angular/router';
import { ArrivalCreateComponent } from './pages/arrival-create/arrival-create.component';
import { ArrivalEditComponent } from './pages/arrival-edit/arrival-edit.component';
import { ArrivalListComponent } from './pages/arrival-list/arrival-list.component';

const routes: Routes = [
    { path: 'create', component: ArrivalCreateComponent },
    { path: 'edit/:id', component: ArrivalEditComponent },
    { path: 'list', component: ArrivalListComponent }
];

export const ArrivalRoutes = RouterModule.forChild(routes);