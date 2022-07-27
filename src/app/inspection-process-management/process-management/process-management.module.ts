import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { ProcessManagementRoutingModule } from './process-management-routing.module';
import { ProcessManagementComponent } from './process-management.component';

@NgModule({
    declarations: [ProcessManagementComponent],
    imports: [AppSharedModule, AdminSharedModule, ProcessManagementRoutingModule],
})
export class ProcessManagementModule {}
