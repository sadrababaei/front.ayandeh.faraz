import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGroupManagementComponent } from './question-group-management.component';

const routes: Routes = [
    {
        path: '',
        component: QuestionGroupManagementComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuestionGroupManagementRoutingModule {}
