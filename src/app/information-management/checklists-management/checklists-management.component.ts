import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './checklists-management.component.html',
    styleUrls: ['./checklists-management.component.less'],
})
export class ChecklistsManagementComponent extends AppComponentBase {

    constructor(injector: Injector) {
        super(injector);
    }
}
