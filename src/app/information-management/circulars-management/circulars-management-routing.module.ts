import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularsManagementComponent } from './circulars-management.component';

const routes: Routes = [
    {
        path: '',
        component: CircularsManagementComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CircularsManagementRoutingModule {}
