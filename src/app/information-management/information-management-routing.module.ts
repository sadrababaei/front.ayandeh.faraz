import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'checklists-management',
                        loadChildren: () => import('./checklists-management/checklists-management.module').then((m) => m.ChecklistsManagementModule),
                        data: { permission: 'Pages.Administration.Users' },
                    },
/*                     {
                        path: 'users',
                        loadChildren: () => import('./circulars-management/circulars-management.module').then((m) => m.UsersModule),
                        data: { permission: 'Pages.Administration.Users' },
                    },
                    {
                        path: 'roles',
                        loadChildren: () => import('./questions-management/questions-management.module').then((m) => m.RolesModule),
                        data: { permission: 'Pages.Administration.Roles' },
                    },
                    {
                        path: 'auditLogs',
                        loadChildren: () => import('./questions-groups-management/questions-groups-management.module').then((m) => m.AuditLogsModule),
                        data: { permission: 'Pages.Administration.AuditLogs' },
                    }, */
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class InformationManagementRoutingModule {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
