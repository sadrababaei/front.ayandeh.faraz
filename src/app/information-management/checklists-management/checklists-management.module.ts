import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { ChecklistsManagementRoutingModule } from './checklists-management-routing.module';
import { ChecklistsManagementComponent } from './checklists-management.component';

@NgModule({
    declarations: [ChecklistsManagementComponent],
    imports: [AppSharedModule, AdminSharedModule,ChecklistsManagementRoutingModule],
})
export class ChecklistsManagementModule {}
