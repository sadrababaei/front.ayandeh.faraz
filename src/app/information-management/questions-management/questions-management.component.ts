import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    selector: 'app-questions-management',
    templateUrl: './questions-management.component.html',
    styleUrls: ['./questions-management.component.less'],
})
export class QuestionsManagementComponent extends AppComponentBase {
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {}
}
