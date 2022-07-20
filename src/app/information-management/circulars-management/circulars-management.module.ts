import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { CircularsManagementRoutingModule } from './circulars-management-routing.module';
import { CircularsManagementComponent } from './circulars-management.component';

@NgModule({
    declarations: [CircularsManagementComponent],
    imports: [AppSharedModule, AdminSharedModule, CircularsManagementRoutingModule],
})
export class CircularsManagementModule {}
