import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
/*                     {
                        path: 'checklists-management',
                        loadChildren: () =>
                            import('./checklists-management/checklists-management.module').then(
                                (m) => m.ChecklistsManagementModule
                            ),
                        data: { permission: 'Pages.Administration.Users' },
                    },
                    {
                        path: 'circulars-management',
                        loadChildren: () =>
                            import('./circulars-management/circulars-management.module').then(
                                (m) => m.CircularsManagementModule
                            ),
                        data: { permission: 'Pages.Administration.Users' },
                    },
                    {
                        path: 'question-group-management',
                        loadChildren: () =>
                            import('./question-group-management/question-group-management.module').then(
                                (m) => m.QuestionGroupManagementModule
                            ),
                        data: { permission: 'Pages.Administration.Roles' },
                    },
                    {
                        path: 'questions-management',
                        loadChildren: () =>
                            import('./questions-management/questions-management.module').then(
                                (m) => m.QuestionsManagementModule
                            ),
                        data: { permission: 'Pages.Administration.AuditLogs' },
                    }, */
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class InspectionProcessesManagementRoutingModule {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
