import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    templateUrl: './question-group-management.component.html',
    styleUrls: ['./question-group-management.component.less'],
})
export class QuestionGroupManagementComponent extends AppComponentBase {
    constructor(injector: Injector) {
        super(injector);
    }
}
