import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.less'],
})
export class BranchesComponent extends AppComponentBase {

    constructor(injector: Injector) {
        super(injector);
    }
}
