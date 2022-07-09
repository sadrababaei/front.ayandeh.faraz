import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistsManagementComponent } from './checklists-management.component';

const routes: Routes = [
    {
        path: '',
        component: ChecklistsManagementComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChecklistsManagementRoutingModule {}
