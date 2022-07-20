import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { QuestionsManagementRoutingModule } from './questions-management-routing.module';
import { QuestionsManagementComponent } from './questions-management.component';

@NgModule({
    declarations: [QuestionsManagementComponent],
    imports: [AppSharedModule, AdminSharedModule, QuestionsManagementRoutingModule],
})
export class QuestionsManagementModule {}
