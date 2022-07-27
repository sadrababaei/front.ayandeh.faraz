import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxButtonModule,
    
  } from 'devextreme-angular';
import { CustomGridComponent } from './custom-grid.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [CustomGridComponent],
    imports: [AppSharedModule,AdminSharedModule, FormsModule,  
        ReactiveFormsModule,DxDataGridModule,
        DxBulletModule,
        DxTemplateModule,
        DxButtonModule,CommonModule],
        exports:[CustomGridComponent]
})
export class CustomGridModule {}
