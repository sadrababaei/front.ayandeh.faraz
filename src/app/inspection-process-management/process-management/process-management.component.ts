import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './process-management.component.html',
    styleUrls: ['./process-management.component.less'],
})
export class ProcessManagementComponent extends AppComponentBase {
    constructor(injector: Injector) {
        super(injector);
    }
}
