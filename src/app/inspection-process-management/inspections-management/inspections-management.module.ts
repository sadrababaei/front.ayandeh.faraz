import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { InspectionsManagementRoutingModule } from './inspections-management-routing.module';
import { InspectionsManagementComponent } from './inspections-management.component';

@NgModule({
    declarations: [InspectionsManagementComponent],
    imports: [AppSharedModule, AdminSharedModule,InspectionsManagementRoutingModule],
})
export class InspectionsManagementModule {}
