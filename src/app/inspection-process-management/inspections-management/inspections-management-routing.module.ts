import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionsManagementComponent } from './inspections-management.component';

const routes: Routes = [
    {
        path: '',
        component: InspectionsManagementComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InspectionsManagementRoutingModule {}
