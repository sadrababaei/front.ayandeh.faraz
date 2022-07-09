import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { CustomizableDashboardModule } from '@app/shared/common/customizable-dashboard/customizable-dashboard.module';

@NgModule({
    declarations: [BranchesComponent],
    imports: [AppSharedModule, AdminSharedModule, BranchesRoutingModule, CustomizableDashboardModule],
})
export class BranchesModule {}
