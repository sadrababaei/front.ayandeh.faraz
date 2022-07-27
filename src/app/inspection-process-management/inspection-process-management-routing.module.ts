import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'inspections-management',
                        loadChildren: () =>
                            import('./inspections-management/inspections-management.module').then(
                                (m) => m.InspectionsManagementModule
                            ),
                        data: { permission: 'Pages.Administration.Users' },
                    },
                    {
                        path: 'process-management',
                        loadChildren: () =>
                            import('./process-management/process-management.module').then(
                                (m) => m.ProcessManagementModule
                            ),
                        data: { permission: 'Pages.Administration.Users' },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class InspectionProcessManagementRoutingModule {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
