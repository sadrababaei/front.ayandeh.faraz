import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { QuestionGroupManagementRoutingModule } from './question-group-management-routing.module';
import { QuestionGroupManagementComponent } from './question-group-management.component';

@NgModule({
    declarations: [QuestionGroupManagementComponent],
    imports: [AppSharedModule, AdminSharedModule, QuestionGroupManagementRoutingModule],
})
export class QuestionGroupManagementModule {}
