import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { QuestionGroupManagementRoutingModule } from './question-group-management-routing.module';
import { QuestionGroupManagementComponent } from './question-group-management.component';

import { CustomGridModule } from '@app/shared/common/custom-grid/custom-grid.module';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@NgModule({
    declarations: [QuestionGroupManagementComponent],
    imports: [AppSharedModule, AdminSharedModule, QuestionGroupManagementRoutingModule, CustomGridModule, DxDataGridModule],
})
export class QuestionGroupManagementModule {}
