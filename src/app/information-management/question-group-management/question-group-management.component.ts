import { Component, Injector, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
//devextreme
import { DxDataGridComponent } from 'devextreme-angular';
import { AppLocalizationService } from '@app/shared/common/localization/app-localization.service';
import CustomStore from 'devextreme/data/custom_store';
@Component({
    templateUrl: './question-group-management.component.html',
    styleUrls: ['./question-group-management.component.less'],
})
export class QuestionGroupManagementComponent extends AppComponentBase {
    customersData: any;
    shippersData: any;
    dataSource: any;
    url: string;
    masterDetailDataSource: any;
    exportButtonOptions: any;
    columns: any[];
    editModeEnabled: boolean;
    editMode: boolean;

    @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

    constructor(injector: Injector, private _appLocalizationService: AppLocalizationService) {
        super(injector);
        this.columns = [
            { dataField: 'row', caption: this._appLocalizationService.l('Row') },
            { dataField: 'accountNumber', caption: this._appLocalizationService.l('AccountNumber') },
            { dataField: 'accountTitle', caption: this._appLocalizationService.l('AccountTitle') },
            { dataField: 'accountType', caption: this._appLocalizationService.l('AccountType') },
            { dataField: 'checkLicense', caption: this._appLocalizationService.l('CheckLicense') },
            { dataField: 'accountStatus', caption: this._appLocalizationService.l('AccountStatus') },
        ];
        this.dataSource = new CustomStore({
            key: 'id',
            load(loadOptions: any): any {
                // let params: HttpParams = new HttpParams();
                // [
                //   'skip',
                //   'take',
                //   'requireTotalCount',
                //   'requireGroupCount',
                //   'sort',
                //   'filter',
                //   'totalSummary',
                //   'group',
                //   'groupSummary',
                // ].forEach((i) => {
                //   if (i in loadOptions && isNotEmpty(loadOptions[i])) { params = params.set(i, JSON.stringify(loadOptions[i])); }
                // });
                return new Promise(function (resolve) {
                    resolve({
                        data: [
                            {
                                id: 1,
                                row: 1,
                                accountNumber: '0101564669001',
                                accountTitle: 'حساب شماره 1',
                                accountType: 'جاری',
                                checkLicense: '',
                                accountStatus: 'فعال',
                            },
                            {
                                id: 2,
                                row: 2,
                                accountNumber: '0101564669001',
                                accountTitle: 'حساب شماره 2',
                                accountType: 'جاری',
                                checkLicense: '',
                                accountStatus: 'فعال',
                            },
                            {
                                id: 3,
                                row: 3,
                                accountNumber: '0101564669001',
                                accountTitle: 'حساب شماره 3',
                                accountType: 'جاری',
                                checkLicense: '',
                                accountStatus: 'فعال',
                            },
                        ],
                        totalCount: 3,
                    });
                });
            },
        });
    }
}
