import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './inspections-management.component.html',
    styleUrls: ['./inspections-management.component.less'],
})
export class InspectionsManagementComponent extends AppComponentBase {
    constructor(injector: Injector) {
        super(injector);
    }
}
