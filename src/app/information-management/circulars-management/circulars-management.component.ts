import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './circulars-management.component.html',
    styleUrls: ['./circulars-management.component.less'],
})
export class CircularsManagementComponent extends AppComponentBase {

    constructor(injector: Injector) {
        super(injector);
    }
}
