import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Injector,
    Input,
    Output,
    Injectable,
    DoCheck,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { exportDataGrid } from 'devextreme/excel_exporter';
/* import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf'; */
/* import 'jspdf-autotable'; */
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { DxDataGridComponent } from 'devextreme-angular';
import { Store } from 'devextreme/data';
import DataSource, { DataSourceOptions } from 'devextreme/data/data_source';
import { AppLocalizationService } from '@app/shared/common/localization/app-localization.service';
import { AppComponentBase } from '@shared/common/app-component-base';
import { LoginOptions } from 'angular-oauth2-oidc';

/* import * as fa from "devextreme/localization/messages/fa.json";
import { locale, loadMessages } from "devextreme/localization"; */

@Component({
    selector: 'custom-grid',
    templateUrl: './custom-grid.component.html',
    styleUrls: ['./custom-grid.component.less'],
})
@Injectable({ providedIn: 'root' })
export class CustomGridComponent extends AppComponentBase {
    @Input() dataSource: DataSource | DataSourceOptions | Store | string | Array<any>;
    @Input() storageKey: string;
    @Input() gridName: string;
    @Input() columns: any[];
    @Input() editMode: boolean;
    @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

    constructor(injector: Injector) {
        super(injector);
        /*     loadMessages(fa)
    locale(navigator.language); */
    }

    customizeColumns(columns) {
        columns.forEach((column) => {
            if (column.name === 'row') {
                column.allowHeaderFiltering = false;
            }
        });
    }

    /* exportGrid(e: any) {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance,
    }).then(() => {
      console.log(this.editMode);
      doc.save(`${this.gridName}.pdf`);
    });
  }
  exportCsv(e: any) {
    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    const name = this.gridName;
    exportDataGrid({
      worksheet: worksheet,
      component: this.dataGrid.instance,
    }).then(function () {
      workbook.csv.writeBuffer().then(function (buffer) {
        saveAs(new Blob([buffer], { type: "application/octet-stream" }), `${name}.csv`);
      });
    });
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    const name = this.gridName;
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      customizeCell: function (options) {
        //const excelCell = options;
        // excelCell.font = { name: 'Arial', size: 12 };
        // excelCell.alignment = { horizontal: 'left' };
      }
    }).then(function () {
      workbook.xlsx.writeBuffer()
        .then(function (buffer: BlobPart) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${name}.xlsx`);
        });
    });
    e.cancel = true;
  }
 */
    /*   loadState() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }
  
  saveState(state) {
    if( AppConsts.publicEditMode){
      if (state) {
        for (let i = 0; i < state.columns.length; i++) {
          state.columns[i].filterValue = null;
        }
      }
      localStorage.setItem(this.storageKey, JSON.stringify(state));
    }
  } */
}
